import { useEffect, useState, useContext, useCallback} from 'react'
import axios from 'axios'
import ListItem from '../components/ListItem'
import ModalCreateIssue from '../components/Modal/ModalCreateIssue'
import actiontypes from '../reducers/actiontypes'
import { UserContext } from '../contexts/userContext'


const Home = () => {


  const [issues, setIssues] = useState([])
  const { user, dispatch } = useContext(UserContext)
  
  
  const getAllIssues = useCallback(async (_user) => {
    
    
    const _issues = await axios.get("https://localhost:7035/api/Issues", {
      headers: {
        'Authorization': `Bearer ${_user}`
      }
    })
    
    setIssues(_issues.data.sort((a,b) => {
      return  Date.parse(b.created)-Date.parse(a.created)
    }))
    
  },[])



  useEffect(() => {
    dispatch({
      type: actiontypes().users.checkToken,
    })
    getAllIssues(user)
  
  }, [dispatch, getAllIssues, user])

  return (
    <div className='container'>
      <div className='d-flex justify-content-between my-3'>
        <h1>Issues</h1>
        <ModalCreateIssue />
      </div>
      <div className="list-group">
        { issues.length && issues.map((item) => <ListItem key={item.id} item={item} />)}
        
      </div>
    </div>
  )
}

export default Home