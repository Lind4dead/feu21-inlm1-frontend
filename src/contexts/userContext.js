import { createContext, useReducer } from "react";
import { userReducer } from "../reducers/userReducer";

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, null )


  return (
    <UserContext.Provider value={{user, dispatch}}>
      { children }
    </UserContext.Provider>
  )
}