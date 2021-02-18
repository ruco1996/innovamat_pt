import React, { Fragment, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import List from '../../components/list'
import Loader from '../../components/_shared/loader'
import Title from '../../components/_shared/title'
import { useResourceDispatch, useResourceState } from '../../hooks/useResourceContext'
import { ISection } from '../../models/Section'
import apiService from '../../services/api.service'
import styles from './styles.module.css'

function Resources() {
  const { pathname } = useLocation()
  const { resources, loading, error, favourites } = useResourceState()
  const dispatch = useResourceDispatch()

  useEffect(() => {
    apiService.get<ISection[]>(
      pathname,
      () => dispatch({ type: 'FETCH_RESOURCES_REQUEST' }),
      data => dispatch({ type: 'FETCH_RESOURCES_SUCCESS', payload: data }),
      error => dispatch({ type: 'FETCH_RESOURCES_ERROR', payload: error })
    )
  }, [dispatch, pathname])

  const title = useMemo(() => pathname.replace('/', ''), [pathname])

  return (
    <>
      <Title>{title}</Title>
      {loading && <Loader />}
      {error && 'Error al obtener los recursos'}
      {resources?.map(section => (
        <Fragment key={section.sectionName}>
          <h3 className={styles.title}>{section.sectionName}</h3>
          <List resources={section.resources} favourites={favourites} />
        </Fragment>
      ))}
    </>
  )
}

export default Resources
