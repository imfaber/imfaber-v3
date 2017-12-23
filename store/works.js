import jsonApiClient from '../lib/jsonApiClient'
const jsonApi = jsonApiClient()

export const strict = true

export const state = () => ({
  list: []
})

export const mutations = {
  list (state, items) {
    state.list = items;
  },
}

export const getters = {
  list (state) {
    return state.list
  }
}

export const actions = {

  async findOneBySlug ({commit}, slug) {
    const query = {
      include: 'image,image.thumbnail',
      filter: {
        slug: {
          path: 'slug',
          value: slug
        },
        status: {
          path: 'status',
          value: 1
        }
      }
    }
    const res = await jsonApi.get('works', query)
    return res[0] || {}
  },

  async findAll ({commit}, limit = 4, offset = 0) {
    const query = {
      sort:    '-created',
      page:    {
        limit
      },
      include: 'image,image.thumbnail',
      fields:  {
        works: 'title,technology,image,slug',
        images:  'name,thumbnail',
        files:   'filename,url'
      }
    }

    return await jsonApi.get('works', query)
  },

}