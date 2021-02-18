import { createContext, useContext, useReducer } from 'react'
import resourceReducer, { initState } from './reducer'
import { Dispatch, ResourceProviderProps, ResourceState } from './types'

const ResourceStateContext = createContext<ResourceState | undefined>(undefined)
const ResourceDispatchContext = createContext<Dispatch | undefined>(undefined)

function ResourceProvider({ children }: ResourceProviderProps) {
  const [state, dispatch] = useReducer(resourceReducer, initState)

  return (
    <ResourceStateContext.Provider value={state}>
      <ResourceDispatchContext.Provider value={dispatch}>
        {children}
      </ResourceDispatchContext.Provider>
    </ResourceStateContext.Provider>
  )
}

function useResourceState() {
  const context = useContext(ResourceStateContext)
  if (context === undefined) {
    throw new Error('useResourceState must be used within a ResourceProvider')
  }
  return context
}

function useResourceDispatch() {
  const context = useContext(ResourceDispatchContext)
  if (context === undefined) {
    throw new Error('useResourceDispatch must be used within a ResourceProvider')
  }
  return context
}

export { ResourceProvider, useResourceState, useResourceDispatch }
