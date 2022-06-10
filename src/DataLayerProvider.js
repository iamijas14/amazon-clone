import React, {createContext, useContext, useReducer} from 'react'
import reducer, {initialState} from './reducer';

export const StateContext = createContext();

export const DataLayerProvider = ({ children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
);

export const useDatalayer = () => useContext(StateContext);
