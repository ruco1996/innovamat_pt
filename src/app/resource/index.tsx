import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PdfViewer from '../../components/pdf-viewer'
import Loader from '../../components/_shared/loader'
import Title from '../../components/_shared/title'
import { useResourceDispatch, useResourceState } from '../../hooks/useResourceContext'
import { IResource } from '../../models/Resource'
import apiService from '../../services/api.service'

function Resource() {
  let { id } = useParams<{ id: string }>()
  const dispatch = useResourceDispatch()
  const { resource, loading, error } = useResourceState()

  useEffect(() => {
    apiService.get<IResource>(
      `/resource/${id}`,
      () => dispatch({ type: 'FETCH_RESOURCE_BY_ID_REQUEST', payload: id }),
      data => dispatch({ type: 'FETCH_RESOURCE_BY_ID_SUCCESS', payload: data }),
      error => dispatch({ type: 'FETCH_RESOURCE_BY_ID_ERROR', payload: error })
    )
  }, [dispatch, id])

  return (
    <>
      {loading && <Loader />}
      {error && 'Error al obtener el recurso'}
      {resource && (
        <>
          <Title>{resource.title}</Title>
          <p>{resource.description}</p>
          <PdfViewer file={resource.file} />
        </>
      )}
    </>
  )
}

export default Resource
