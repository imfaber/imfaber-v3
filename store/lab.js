import jsonApi from '../lib/jsonApiClient'

export const strict = true

export const state = () => ({
  // list: [],
  filters: [],
})

export const mutations = {
  list (state, items) {
    state.list = items
  },
  filters (state, filters) {
    state.filters = filters;
  }
}

export const getters = {
  list (state) {
    return state.list
  },
  filters (state) {
    return state.filters
  }
}

export const actions = {

  async fetchFilters ({commit}) {
    return await jsonApi.get('tags')
  },

  async findOneBySlug ({commit}, slug) {
    const query = {
      sort:    '-year',
      include: 'image,image.imageFile,category,tags,paragraphs,paragraphs.field_media,paragraphs.field_media.imageFile',
      // page:    {
      //   limit: 1
      // },
      filter:  {
        slug:   {
          path:  'slug',
          value: slug
        },
        status: {
          path:  'status',
          value: 1
        }
      },
      fields:  {
        images: 'name,imageFile',
        // files:  'filename,url',
        // 'paragraph_type': 'label'
      }

    }
    const res = await jsonApi.get('articles', query)
    return res[0] || {}
  },

  async findAllByTag ({commit}, termMachineName) {
    termMachineName = (typeof termMachineName === 'string') ? [termMachineName] : termMachineName
    let tagValuses = {};
    for (let i = 0; i < termMachineName.length; ++i) tagValuses[i] = termMachineName[i]

    const query = {
      sort:    '-date',
      include: 'image,image.thumbnail,technology',
      fields:  {
        works:  'title,technology,image,slug,background_color',
        images: 'name,thumbnail',
        files:  'filename,url'
      },
      filter: {
        status: {
          path: 'status',
          value: 1
        },
        tags: {
          condition: {
            path: 'tads.machine_name',
            value: tagValuses,
            operator: 'IN'
          }
        },
        category: {
          condition: {
            path: 'category.machine_name',
            value: 'lab'
          }
        }
      },
    }

    return await jsonApi.get('articles', query)
  },


  async findAll ({commit}, limit = 4, offset = 0) {
    const query = {
      sort:    '-date',
      include: 'image,image.imageFile,category,tags',
      fields:  {
        articles:  'title,category,image,slug,tags',
      },
      filter: {
        status: {
          path: 'status',
          value: 1
        },
        category: {
          condition: {
            path: 'category.machine_name',
            value: 'lab'
          }
        }
      },
      page: {
        offset: offset,
        limit: limit
      }
    }
    const list = await jsonApi.get('articles', query)
    commit('list', list.data)
    return list
  },

}