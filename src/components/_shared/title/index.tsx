import React from 'react'
import styles from './styles.module.css'

interface ITitle extends React.HTMLAttributes<HTMLHeadingElement> {}

function Title({ children }: ITitle) {
  return <h2 className={styles.title}>{children}</h2>
}

export default Title
