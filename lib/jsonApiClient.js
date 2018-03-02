/**
 * Client for content JSON API
 * This is actually just a thin wrapper around waterwheel.js.
 * We additionnaly use "jsonapi-parse" package to format
 * reponses : it resolves relationships and included objects nicely.
 * 
 * Example usage : 
 *   const api = contentaJsonApi(https://mydomain.fr)
 *   const datas = await api.get('recipes', queryParams)
 */
import Waterwheel from "waterwheel"
import jsonapiParse from "jsonapi-parse"

const waterwheel = new Waterwheel(
  {
    base: process.env.jsonApiServer,
    jsonapiPrefix: process.env.jsonApiPrefix,
    timeout: 30000,
    accessCheck: false,
    // oauth:{
    //   grant_type: 'password',
    //   client_id: process.env.jsonApiClientId,
    //   client_secret: 'test',
    //   username: 'imfaber',
    //   password: 'mypass',
    // }
  }
);

export default {
  get: async function (uri, queryParams = {}, id = "") {
    queryParams = Object.assign({_consumer_id: process.env.jsonApiClientId}, queryParams)
    const response = await waterwheel.jsonapi.get(uri, queryParams, id);

    // Add extra properties to the resource attributes.
    // @todo Think of better normaliser.
    if (response.included) {
      response.included.forEach((elem, i) => {
        elem.attributes.typeId = elem.type
        elem.attributes.meta = Object.assign({}, elem.attributes.meta, elem.meta)
      })
    }

    return jsonapiParse.parse(response).data;
  },
  post: async function (uri, body = {}) {
    const response = await waterwheel.jsonapi.post(uri, body);
    return jsonapiParse.parse(response).data;
  }
}
