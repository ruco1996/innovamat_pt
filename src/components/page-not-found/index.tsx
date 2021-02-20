import { Link } from 'react-router-dom'
import Image from '../../assets/images/404.png'
import Button from '../_shared/button'
import styles from './styles.module.css'

export default function PageNotFound() {
  return (
    <div className={styles.content}>
      <div>
        <h1>Ni Sherlock Holmes es capaz de encontrar la página que estás buscando</h1>
        <p>
          Lo sentimos, quizás es un enlace antiguo, ha sido eliminado o la dirección que has puesto
          es incorrecta. ¿Por qué no vuelves a la página principal?
        </p>
        <div>
          <Link to="/">
            <Button className={styles.button} color="primary">
              Volver a la página principal
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <img src={Image} alt="" />
      </div>
    </div>
  )
}
