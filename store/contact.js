import jsonApi from '../lib/jsonApiClient'

export const strict = true

export const state = () => ({})

export const mutations = {}

export const getters = {}

export const actions = {

  async sendMessage ({commit}, payload) {
    let data = {
      "attributes": {
        "name": payload.name,
        "mail": payload.email,
        "subject": payload.subject,
        "message": payload.message,
        "uuid": `${Date.now()}`,
        "copy": true,
        "created": Math.floor(Date.now() / 1000),
        "ip_address": "string"
      },
      "type": "contact_message--contact"
    }

    return await jsonApi.post('contact_message/contact', {data: data})
  },

}