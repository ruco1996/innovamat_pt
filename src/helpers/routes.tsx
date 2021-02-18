import { FaCalendarDay, FaColumns, FaShapes, FaTree } from 'react-icons/fa'
import { IRouteLabel } from '../models/Route'

export const routes = ['/talleres', '/rincones', '/ambientes', '/rutinas']

export const routeLabels: IRouteLabel[] = [
  {
    to: '/talleres',
    label: 'Talleres',
    icon: <FaTree />
  },
  {
    to: '/rincones',
    label: 'Rincones',
    icon: <FaShapes />
  },
  {
    to: '/ambientes',
    label: 'Ambientes',
    icon: <FaColumns />
  },
  {
    to: '/rutinas',
    label: 'Rutinas',
    icon: <FaCalendarDay />
  }
]
