import { useCallback, useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import useEventListener from '../../../hooks/useEventListener'
import { useIsMobile } from '../../../hooks/useMediaQuery'
import useQuery from '../../../hooks/useQuery'
import FilterDropdown from '../../filter-dropdown'
import Button from '../../_shared/button'
import styles from './styles.module.css'

export default function TopBar() {
  const key = useQuery().get('keyword')
  const [scrollOnTop, setScrollOnTop] = useState(true)
  const [keyword, setKeyword] = useState(key || '')
  const history = useHistory()
  const isMobile = useIsMobile()

  useEffect(() => {
    setKeyword(key || '')
  }, [key])

  const handler = useCallback(() => {
    setScrollOnTop(window.pageYOffset === 0)
  }, [])
  useEventListener('scroll', handler)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    history.push(`/search?keyword=${keyword}`)
  }

  // TODO
  // if (isMobile) {
  //   return <nav></nav>
  // }

  return (
    <nav className={`${styles.topbar} ${!scrollOnTop ? styles.shadow : ''}`}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.filter}>
          <FilterDropdown />
          <div className={styles.searchBox}>
            <input
              placeholder="Introduce un texto"
              type="text"
              value={keyword}
              onChange={handleChange}
            />
          </div>
        </div>
        <Button type="submit" className={styles.buttonSearch} color="primary" icon={<FaSearch />}>
          Buscar
        </Button>
      </form>
    </nav>
  )
}
