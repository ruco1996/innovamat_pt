import React from 'react'
import { NavLink } from 'react-router-dom'
import { routeLabels } from '../../../helpers/routes'
import styles from './styles.module.css'

function BottomBar() {
  return (
    <div className={styles.bootombar}>
      {routeLabels.map(route => (
        <NavLink activeClassName={styles.selected} key={route.to} to={route.to}>
          <div className={styles.listItem}>
            {route.icon}
            <span>{route.label}</span>
          </div>
        </NavLink>
      ))}
    </div>
  )
}

export default BottomBar
