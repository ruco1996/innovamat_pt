import { useRef, useState } from 'react'
import { BsChevronDown, BsChevronUp, BsFilterLeft } from 'react-icons/bs'
import useOutsideClickListener from '../../hooks/useOutsideClickListener'
import FilterContent from '../filter-content'
import styles from './styles.module.css'

const FilterDropdown = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  useOutsideClickListener(ref, () => setVisible(false))

  return (
    <div className={styles.dropdown} ref={ref}>
      <div className={styles.filter} onClick={() => setVisible(vis => !vis)}>
        {visible ? <BsChevronUp /> : <BsChevronDown />}
        FILTROS
        <BsFilterLeft />
      </div>

      <div className={`${styles.dropdown_content} ${visible ? styles.display : ''}`}>
        <FilterContent />
      </div>
    </div>
  )
}

export default FilterDropdown
