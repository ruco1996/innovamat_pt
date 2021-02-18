export interface IRouteLabel {
  to: string
  label: string
  icon: React.ReactNode
}

export interface IRoute {
  path: string
  exact?: boolean
  privated?: boolean
  component: () => JSX.Element
}
