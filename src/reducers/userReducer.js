
import actiontypes from "./actiontypes";



export const userReducer = (user, action) => {
  switch(action.type) {

    case actiontypes().users.login:{
      localStorage.setItem("token", action.payload)
      return user = action.payload
    }

    case actiontypes().users.register:{
      localStorage.setItem("token", action.payload)
      return user = action.payload
    }

    case actiontypes().users.logout:{
      localStorage.removeItem("token")
      return user = null
    }

    case actiontypes().users.checkToken:{
      const token = localStorage.getItem("token")
      if(token !== null) {
        return user = token
      }
      break;
    }

    default:
      return user
  }
}


