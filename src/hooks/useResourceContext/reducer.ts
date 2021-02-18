import filterSchema from '../../helpers/filters'
import { IFilter } from '../../models/Filters'
import { Action, ResourceState } from './types'

const getDefaultFilters = () => {
  const filters: IFilter = {}
  filterSchema.forEach(({ id, data }) => {
    filters[id] = data[0].id
  })
  return filters
}

export const initState: ResourceState = {
  filters: getDefaultFilters(),
  resources: undefined,
  loading: false,
  error: undefined,
  favourites: [],
  resource: undefined,
  searchResult: undefined
}

function resourceReducer(state: ResourceState, action: Action): ResourceState {
  switch (action.type) {
    case 'SET_FILTER':
      return { ...state, filters: { ...state.filters, ...action.payload } }
    case 'FETCH_RESOURCES_REQUEST':
      return { ...state, resources: undefined, loading: true, error: undefined }
    case 'FETCH_RESOURCES_SUCCESS':
      return { ...state, resources: action.payload, loading: false, error: undefined }
    case 'FETCH_RESOURCES_ERROR':
      return { ...state, resources: undefined, loading: false, error: action.payload }
    case 'SET_FAVOURITE':
      return {
        ...state,
        favourites: state.favourites.includes(action.payload)
          ? state.favourites.filter(f => f !== action.payload)
          : [...state.favourites, action.payload]
      }
    case 'FETCH_RESOURCE_BY_ID_REQUEST':
      return { ...state, resource: undefined, loading: true, error: undefined }
    case 'FETCH_RESOURCE_BY_ID_SUCCESS':
      return { ...state, resource: action.payload, loading: false, error: undefined }
    case 'FETCH_RESOURCE_BY_ID_ERROR':
      return { ...state, resource: undefined, loading: false, error: action.payload }
    case 'FETCH_RESOURCES_BY_FILTER_SUCCESS': {
      return {
        ...state,
        searchResult: action.payload
      }
    }
    default:
      return state
  }
}

export default resourceReducer
