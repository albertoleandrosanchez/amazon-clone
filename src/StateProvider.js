import React, {createContext,useContext,useReducer} from 'react';


//preparan la capa de datos/datalayer
export const StateContext = createContext();

// envuelve la app
export const StateProvider = ({reducer,initialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)