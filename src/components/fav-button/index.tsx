import { FaHeart, FaRegHeart } from 'react-icons/fa'
import styles from './styles.module.css'

interface IFavButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fav: boolean
}

export default function FavButton({ fav, className = '', ...props }: IFavButton) {
  return (
    <button {...props} className={`${className} ${styles.button} ${fav ? styles.fav : ''}`}>
      {fav ? <FaHeart /> : <FaRegHeart />}
      Favorito
    </button>
  )
}
