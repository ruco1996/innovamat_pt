import { useEffect } from 'react'
import useStickyState from '../../hooks/useStickyState'
import styles from './styles.module.css'

const SCHEMES = {
  SYSTEM: 'system',
  DARK: 'dark-mode',
  LIGHT: 'light-mode'
}

const DARK_CLASS = 'dark'

interface IColorSwitch {
  className: string
}

export default function ColorSwitch({ className }: IColorSwitch) {
  const [scheme, setScheme] = useStickyState(SCHEMES.LIGHT, 'isDark')

  useEffect(() => {
    if (scheme === SCHEMES.DARK) {
      document.documentElement.classList.add(DARK_CLASS)
    } else {
      document.documentElement.classList.remove(DARK_CLASS)
    }
  }, [scheme])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    setScheme(checked ? SCHEMES.DARK : SCHEMES.LIGHT)
  }

  return (
    <div className={`${className} ${styles.colorSwitch}`}>
      <label className={styles.switch}>
        <input type="checkbox" checked={scheme === SCHEMES.DARK} onChange={handleChange} />
        <span className={styles.slider}></span>
      </label>
      <span className={styles.text}>Dark Mode</span>
    </div>
  )
}
