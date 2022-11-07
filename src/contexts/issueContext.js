import { createContext, useReducer } from "react";
import { issueReducer } from "../reducers/issueReducer";

export const IssueContext = createContext()

export const IssueContextProvider = ({ children }) => {
  const [comments, commentsDispatch] = useReducer(issueReducer, [] )


  return (
    <IssueContext.Provider value={{comments, commentsDispatch}}>
      { children }
    </IssueContext.Provider>
  )
}