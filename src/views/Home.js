import { useEffect, useState} from 'react'
import axios from 'axios'
import ListItem from '../components/ListItem'
import ModalCreateIssue from '../components/Modal/ModalCreateIssue'

const Home = () => {

  useEffect(() => {
    getAllIssues()
  
    
  }, [])
  

  const getAllIssues = async () => {
    const _issues = await axios.get("http://localhost:9999/issues")
    console.log(_issues.data)
    setIssues(_issues.data)
  }

  const [issues, setIssues] = useState([])



  return (
    <div className='container'>
      <div className='d-flex justify-content-between my-3'>
        <h1>Issues</h1>
        <ModalCreateIssue />
      </div>
      <div className="list-group">
        { issues.length ? issues.map(item => <ListItem key={item.id} item={item} />) : "" }
        
      </div>
    </div>
  )
}

export default Home