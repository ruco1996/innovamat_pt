import React, { useEffect, useMemo } from 'react'
import List from '../../components/list'
import Loader from '../../components/_shared/loader'
import useQuery from '../../hooks/useQuery'
import { useResourceDispatch, useResourceState } from '../../hooks/useResourceContext'
import { IFilter } from '../../models/Filters'
import { IResourceItem } from '../../models/Resource'
import apiService from '../../services/api.service'

function Search() {
  const key = useQuery().get('keyword')
  const { searchResult, loading, error, favourites, filters } = useResourceState()
  const dispatch = useResourceDispatch()

  const filteredSearch = useMemo(
    () =>
      searchResult?.filter(
        r => r.tag.toLocaleUpperCase() === filters['dinamicas_aula'].toLocaleUpperCase()
      ),
    [searchResult, filters]
  )

  useEffect(() => {
    if (key) {
      apiService.post<IFilter, IResourceItem[]>(
        '/search',
        { keyword: key },
        () => dispatch({ type: 'FETCH_RESOURCES_BY_FILTER_REQUEST' }),
        data => dispatch({ type: 'FETCH_RESOURCES_BY_FILTER_SUCCESS', payload: data }),
        error => dispatch({ type: 'FETCH_RESOURCES_BY_FILTER_ERROR', payload: error })
      )
    }
  }, [dispatch, key])

  return (
    <>
      {loading && <Loader />}
      {error && 'Error al obtener la búsqueda'}
      {filteredSearch && <List favourites={favourites} resources={filteredSearch} />}
    </>
  )
}

export default Search
