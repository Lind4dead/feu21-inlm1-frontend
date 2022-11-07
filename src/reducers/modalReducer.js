import actiontypes from "./actiontypes"


export const modalReducer = (modal, action) => {
  switch(action.type) {

    case actiontypes().issues.toggleModal: {
      
      return modal = action.payload
    }

    default:
      return modal
  }
}