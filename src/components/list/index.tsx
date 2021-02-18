import { useHistory } from 'react-router-dom'
import { useResourceDispatch } from '../../hooks/useResourceContext'
import { IResourceItem } from '../../models/Resource'
import ListItem from '../list-item'
import styles from './styles.module.css'

interface IList {
  resources: IResourceItem[]
  favourites: string[]
}

export default function List({ resources, favourites }: IList) {
  const dispatch = useResourceDispatch()
  const history = useHistory()

  return (
    <div className={styles.list}>
      {resources.map((r, index) => (
        <ListItem
          {...r}
          key={`${r.id}-${index}`}
          isFav={favourites.includes(r.id)}
          onSetFav={() => dispatch({ type: 'SET_FAVOURITE', payload: r.id })}
          onClick={() => history.push(`resource/${r.id}`)}
        />
      ))}
    </div>
  )
}
