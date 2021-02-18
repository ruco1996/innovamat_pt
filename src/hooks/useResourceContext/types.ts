import { IFilter } from '../../models/Filters'
import { IResource, IResourceItem } from '../../models/Resource'
import { ISection } from '../../models/Section'

export type Dispatch = (action: Action) => void
export type ResourceProviderProps = { children: React.ReactNode }

export type ResourceState = {
  filters: IFilter
  resources: ISection[] | undefined
  loading: boolean
  error: string | undefined
  favourites: string[]
  resource: IResource | undefined
  searchResult: IResourceItem[] | undefined
}

export type Action =
  | { type: 'SET_FILTER'; payload: IFilter }
  | { type: 'FETCH_RESOURCES_REQUEST' }
  | { type: 'FETCH_RESOURCES_SUCCESS'; payload: ISection[] }
  | { type: 'FETCH_RESOURCES_ERROR'; payload: string }
  | { type: 'CLEAR_REDUCER' }
  | { type: 'SET_FAVOURITE'; payload: string }
  | { type: 'FETCH_RESOURCE_BY_ID_REQUEST'; payload: string }
  | { type: 'FETCH_RESOURCE_BY_ID_SUCCESS'; payload: IResource }
  | { type: 'FETCH_RESOURCE_BY_ID_ERROR'; payload: string }
  | { type: 'FETCH_RESOURCES_BY_FILTER_REQUEST' }
  | { type: 'FETCH_RESOURCES_BY_FILTER_SUCCESS'; payload: IResourceItem[] }
  | { type: 'FETCH_RESOURCES_BY_FILTER_ERROR'; payload: string }
