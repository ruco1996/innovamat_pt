import { useState } from 'react'
import { IResourceItem } from '../../models/Resource'
import FavButton from '../fav-button'
import styles from './styles.module.css'

interface IListItem extends IResourceItem {
  onSetFav: (id: string) => void
  onClick: (id: string) => void
  isFav: boolean
}

export default function ListItem({
  id,
  description,
  image,
  title,
  isFav,
  onSetFav,
  onClick
}: IListItem) {
  const [showSection, setShowSection] = useState(false)

  const handleMouseHover = () => {
    setShowSection(prevValue => !prevValue)
  }

  const handleSetFav = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation()
    onSetFav(id)
  }

  return (
    <div
      onClick={() => onClick(id)}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
      className={styles.listItem}
    >
      <div className={styles.content}>
        <img src={image} alt="" />
        <h5>{title}</h5>
        <span>{description}</span>
      </div>
      <div className={styles.footer}>
        <FavButton
          className={`${!showSection ? styles.showSection : ''}`}
          onClick={handleSetFav}
          fav={isFav}
        />
      </div>
    </div>
  )
}
