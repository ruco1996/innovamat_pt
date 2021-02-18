import React, { useState } from 'react'
import { Document, Page } from 'react-pdf'
import Button from '../_shared/button'
import styles from './styles.module.css'

interface IPdfViewer {
  file: string
}

export default function PdfViewer({ file }: IPdfViewer) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
    setPageNumber(1)
  }

  const changePage = (offset: number) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

  const previousPage = () => {
    changePage(-1)
  }

  const nextPage = () => {
    changePage(1)
  }

  return (
    <div className={styles.document}>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      {numPages && (
        <>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <div className={styles.pagination}>
            <Button color="primary" disabled={pageNumber <= 1} onClick={previousPage}>
              Previous
            </Button>
            <Button color="primary" disabled={pageNumber >= numPages} onClick={nextPage}>
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
