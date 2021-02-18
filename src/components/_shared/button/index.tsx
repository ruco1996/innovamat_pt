import styles from './styles.module.css'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
  color?: 'default' | 'primary'
}

export default function Button({
  children,
  icon,
  className,
  color = 'default',
  type = 'button',
  ...props
}: IButton) {
  return (
    <button type={type} {...props} className={`${styles.button} ${className} ${color}`}>
      {icon && icon}
      {children}
    </button>
  )
}
