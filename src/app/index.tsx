import { Redirect, Route, Switch } from 'react-router-dom'
import SideBar from '../components/_layout/side-bar'
import TopBar from '../components/_layout/top-bar'
import { routes } from '../helpers/routes'
import Resource from './resource'
import Resources from './resources'
import Search from './search'
import styles from './styles.module.css'

export default function App() {
  return (
    <div className={styles.app}>
      <TopBar />
      <div className={styles.main}>
        <SideBar />
        <div className={styles.content}>
          <Switch>
            <Route exact path={routes} component={Resources} />
            <Route exact path="/search" component={Search} />
            <Route path="/resource/:id" component={Resource} />
            <Redirect exact from="/" to={routes[0]} />
            <Route path="*" component={() => <h1>404 Not found</h1>} />
          </Switch>
        </div>
      </div>
    </div>
  )
}
