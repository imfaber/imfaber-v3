import jsonApi from '../lib/jsonApiClient'

export const strict = true

export const state = () => ({
  // list: [],
  tagFilters:      [],
  categoryFilters: [],
})

export const mutations = {
  list (state, items) {
    state.list = items
  },
  tagFilters (state, filters) {
    state.tagFilters = filters
  },
  categoryFilters (state, filters) {
    state.categoryFilters = filters
  }
}

export const getters = {
  list (state) {
    return state.list
  },
  tagFilters (state) {
    return state.tagFilters
  },
  categoryFilters (state) {
    return state.categoryFilters
  }
}

export const actions = {

  async fetchAllTags ({commit}) {
    return await jsonApi.get('tags')
  },

  async fetchAllCategories ({commit}) {
    return await jsonApi.get('categories')
  },

  async findOneBySlug ({commit}, slug) {
    const query = {
      sort:    '-createdAt',
      include: 'image,image.imageFile,category,tags,paragraphs,paragraphs.field_media,paragraphs.field_media.imageFile',
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
        images: 'name,imageFile',
        // files:  'filename,url',
        // 'paragraph_type': 'label'
      }

    }
    const res   = await jsonApi.get('articles', query)
    return res[0] || {}
  },

  async findAllByFilters ({commit}, filters) {
    filters.tags        = (typeof filters.tags === 'string') ? [filters.tags] : filters.tags
    filters.categories  = (typeof filters.categories === 'string') ? [filters.categories] : filters.categories
    let tagValuses      = {}
    let categoryValuses = {}
    for (let i = 0; i < filters.tags.length; ++i) tagValuses[i] = filters.tags[i]
    for (let i = 0; i < filters.categories.length; ++i) categoryValuses[i] = filters.categories[i]


    let query = {
      sort:    '-createdAt',
      include: 'image,image.imageFile,category,tags',
      fields:  {
        articles: 'title,category,image,slug,tags',
      },
      filter:  {
        status: {
          path:  'status',
          value: 1
        },
      },
    }

    if (Object.keys(tagValuses).length) {
      query.filter.tags = {
        condition: {
          path:     'tags.machine_name',
          value:    tagValuses,
          operator: 'IN',
          memberOf: 'and-group'
        }
      }
    }

    if (Object.keys(categoryValuses).length) {
      query.filter.category = {
        condition: {
          path:     'category.machine_name',
          value:    categoryValuses,
          operator: 'IN',
          memberOf: 'and-group'
        }
      }
    }

    if (Object.keys(tagValuses).length || Object.keys(categoryValuses).length) {
      query.filter['and-group'] = {
        group: {
          conjunction: 'AND'
        }
      }
    }

    return await jsonApi.get('articles', query)
  },

  async findAll ({commit}, limit = 4, offset = 0) {
    const query = {
      sort:    '-createdAt',
      include: 'image,image.imageFile,category,tags',
      fields:  {
        articles: 'title,category,image,slug,tags',
      },
      filter:  {
        status: {
          path:  'status',
          value: 1
        },
      },
      page:    {
        offset: offset,
        limit:  limit
      }
    }
    const list  = await jsonApi.get('articles', query)
    commit('list', list.data)
    return list
  },

}