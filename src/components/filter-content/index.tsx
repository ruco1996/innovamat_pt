import React from 'react'
import filterSchema from '../../helpers/filters'
import { useResourceDispatch, useResourceState } from '../../hooks/useResourceContext'
import { IFilter } from '../../models/Filters'
import FilterItem from '../filter-item'

function FilterContent() {
  const { filters } = useResourceState()
  const dispatch = useResourceDispatch()

  const handleSetFilter = (filter: IFilter) => {
    dispatch({ type: 'SET_FILTER', payload: filter })
  }

  return (
    <>
      {filterSchema.map(filter => (
        <FilterItem
          value={filters[filter.id]}
          key={filter.id}
          {...filter}
          setFilter={handleSetFilter}
        />
      ))}
    </>
  )
}

export default React.memo(FilterContent)
