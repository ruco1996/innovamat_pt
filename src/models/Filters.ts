export interface IFilterSchema {
  id: string
  label: string
  data: {
    id: string
    label: string
  }[]
}

export interface IFilter {
  [key: string]: string
}
