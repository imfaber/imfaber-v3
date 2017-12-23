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

  async findAllLatestWorks ({commit}, limit = 4, offset = 0) {

    const query = {
      sort:    '-created',
      page:    {
        limit
      },
      include: 'main_image,main_image.thumbnail',
      fields:  {
        works: 'title,technology,main_image,path',
        images:  'name,thumbnail',
        files:   'filename,url'
      }
    }

    const items = await jsonApi.get('works', query)
    commit('list', items)
  },

}