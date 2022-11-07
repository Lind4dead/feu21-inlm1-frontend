import { createContext, useReducer } from "react";
import { modalReducer } from "../reducers/modalReducer";

export const ModalContext = createContext()

export const ModalContextProvider = ({ children }) => {
  const [modal, modalDispatch] = useReducer(modalReducer, false )


  return (
    <ModalContext.Provider value={{modal, modalDispatch}}>
      { children }
    </ModalContext.Provider>
  )
}