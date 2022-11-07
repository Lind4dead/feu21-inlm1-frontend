import { useEffect, useState, useContext} from 'react'
import axios from 'axios'
import ListItem from '../components/ListItem'
import ModalCreateIssue from '../components/Modal/ModalCreateIssue'
import actiontypes from '../reducers/actiontypes'
import { UserContext } from '../contexts/userContext'
import { useCallback } from 'react'


const Home = () => {


  const [issues, setIssues] = useState([])
  
  const getAllIssues = useCallback(async () => {
    const _issues = await axios.get("https://localhost:7035/api/Issues")
    console.log(_issues.data)
    setIssues(_issues.data.sort((a,b) => {
      return  Date.parse(b.created)-Date.parse(a.created)
    }))
    
  },[])


  const { user, dispatch } = useContext(UserContext)

  useEffect(() => {
    getAllIssues()
    dispatch({
      type: actiontypes().users.checkToken,
    })
  
  }, [dispatch, getAllIssues])

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