import { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { IFilter, IFilterSchema } from '../../models/Filters'
import Button from '../_shared/button'
import styles from './styles.module.css'

interface IFilterItem extends IFilterSchema {
  value: string
  setFilter: (filter: IFilter) => void
}

const FilterItem = ({ value, label, data, id, setFilter }: IFilterItem) => {
  const [display, setDisplay] = useState(true)

  return (
    <div>
      <h4 className={styles.title} onClick={() => setDisplay(prevVal => !prevVal)}>
        {label} {display ? <BsChevronUp /> : <BsChevronDown />}
      </h4>
      {display && (
        <div className={styles.content}>
          {data.map(d => (
            <Button
              key={d.id}
              onClick={() => setFilter({ [id]: d.id })}
              className={`${styles.button} ${value === d.id ? styles.selected : ''}`}
            >
              {d.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}

export default FilterItem
