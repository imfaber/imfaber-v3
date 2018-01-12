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
    return await jsonApi.get('taxonomy-tech-and-skills')
  },

  async findOneBySlug ({commit}, slug) {
    const query = {
      include: 'image,image.thumbnail,image.imageFile,role,workplace,technology',
      page:    {
        limit: 1
      },
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
        images: 'name,thumbnail,imageFile',
        files:  'filename,url',
      }

    }
    const res   = await jsonApi.get('works', query)
    return res[0] || {}
  },

  async findAllByTechAndSkills ({commit}, termMachineName, limit = 4, offset = 0) {
    let technologyValuses = {};
    for (let i = 0; i < termMachineName.length; ++i) technologyValuses[i] = termMachineName[i]

    const query = {
      sort:    '-created',
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
        technology: {
          condition: {
            path: 'technology.machine_name',
            value: technologyValuses,
            operator: 'IN'
          }
        }
      },
      page: {
        offset: offset,
        limit: limit
      }
    }

    return await jsonApi.get('works', query)
  },


  async findAll ({commit}, limit = 4, offset = 0) {
    const query = {
      sort:    '-created',
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
      },
      page: {
        offset: offset,
        limit: limit
      }
    }

    return await jsonApi.get('works', query)
  },

}