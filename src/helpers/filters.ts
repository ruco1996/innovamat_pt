import { IFilterSchema } from '../models/Filters'

const filterSchema: IFilterSchema[] = [
  {
    id: 'realizable_en',
    label: 'Realizable en',
    data: [
      {
        id: 'escuela',
        label: 'Escuela'
      },
      {
        id: 'casa',
        label: 'Casa'
      }
    ]
  },
  {
    id: 'curso',
    label: 'Curso',
    data: [
      {
        id: 'p3',
        label: 'P3'
      },
      {
        id: 'p4',
        label: 'P4'
      },
      {
        id: 'p5',
        label: 'P5'
      },
      {
        id: '1r',
        label: '1r'
      },
      {
        id: '2n',
        label: '2n'
      },
      {
        id: '3r',
        label: '3r'
      },
      {
        id: '4t',
        label: '4t'
      },
      {
        id: '5e',
        label: '5è'
      },
      {
        id: '6e',
        label: '6è'
      }
    ]
  },
  {
    id: 'dinamicas_aula',
    label: 'Dinamicas de aula',
    data: [
      {
        id: 'talleres',
        label: 'Talleres'
      },
      {
        id: 'rincones',
        label: 'Rincones'
      },
      {
        id: 'ambientes',
        label: 'Ambientes'
      },
      {
        id: 'rutinas',
        label: 'Rutinas'
      }
    ]
  },
  {
    id: 'bloques_contenido',
    label: 'Bloques de contenido',
    data: [
      {
        id: 'numeracion',
        label: 'Numeración'
      },
      {
        id: 'calculo',
        label: 'Cálculo'
      },
      {
        id: 'medidas',
        label: 'Medidas'
      }
    ]
  }
]
export default filterSchema
