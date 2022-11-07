import axios from "axios";
import actiontypes from "./actiontypes";


const getComments = async (id) => {
  const res = await axios.get("https://localhost:7035/api/comments/" + id)
  console.log(res.data)
  return res.data
 }

export const issueReducer = (comments, action) => {
  switch(action.type) {

    case actiontypes().issues.getComments:{
      console.log(action.payload)
      getComments(action.payload)
      .then(res => {
        
        return {comments: res}

      })
      break;
    }


    default:
      return comments
  }
}