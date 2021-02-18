import React from 'react'
import { NavLink } from 'react-router-dom'
import { routeLabels } from '../../../helpers/routes'
import ColorSwitch from '../../color-switch'
import styles from './styles.module.css'

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.container}>
        <div>
          <h4 className={styles.title}>DINÁMICAS</h4>
          {routeLabels.map(route => (
            <NavLink activeClassName={styles.selected} key={route.to} to={route.to}>
              <div className={styles.listItem}>
                {route.icon}
                {route.label}
              </div>
            </NavLink>
          ))}
        </div>
        <ColorSwitch className={styles.colorSwitch} />
      </div>
    </div>
  )
}
