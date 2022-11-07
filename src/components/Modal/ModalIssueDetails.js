import axios from 'axios'
import { useContext } from 'react'
import actiontypes from '../../reducers/actiontypes'
import { useState, useEffect } from 'react'
import { IssueContext } from '../../contexts/issueContext'
import { UserContext } from '../../contexts/userContext'
import Comments from '../Comments'

const ModalIssueDetails = ({ item }) => {

  const { user } = useContext(UserContext)
  const { state, dispatch } = useContext(IssueContext)
  const [status, setStatus] = useState()
  const [openModal, setOpenModal] = useState(false)
 

  
  const [comment, setComment] = useState({
    message: '',
    issueId: item.id
  })
  
  const [comments, setComments] = useState()

  useEffect(() => {
    console.log(state)
    if(state.comments){
      setComments(state.comments)
    }
  
    
  }, [state])
  

  const toggleModal = e => {
    
    dispatch({
     type: actiontypes().issues.toggleModal,
     payload: state.toggleModal = !state.toggleModal
    })
    if(state.toggleModal) {
      dispatch({
        type: actiontypes().issues.getComments,
        payload: item.id
       })
    }
  }
  
  const onChange = (e) => {
  setComment({
    message: e.target.value,
    issueId: item.id
  })
}

const changeSelect = e => {
  console.log(e.target.value)
  setStatus(e.target.value)
}



const addComment = async () => {
  await axios.post("https://localhost:7035/api/comments", comment,{
    headers: {
      'Authorization': `Bearer ${user}`
    }})
    
    setComment({
      message: '',
      issueId: item.id
    })
  }
  
  
  
  
  return (
    <div className="modal fade" id={'issueModal' + item.id} tabIndex="-1" aria-labelledby="issueModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="issueModalLabel">{item.subject}</h1>
            <div className='d-flex flex-row modal-header-content'>
              <select className='form-select modal-select' name="status" id="" value={status} onChange={changeSelect}>
                <option value="1">Not started</option>
                <option value="2">Ongoing</option>
                <option value="3">Closed</option>
              </select>
              <button type="button" className="btn-close" onClick={toggleModal} data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
          </div>
          <div className="modal-body">
            {item.message}
          </div>
          <div className="modal-comments border-top">
            <div className='d-flex flex-column gap-2'>
              {comments && comments.map(comment => <Comments comment={comment} />)}
            </div>
            <div className='mt-2 d-flex justify-content-center flex-column gap-2'>
              <textarea className='form-control' name="message" id="" cols="10" rows="3" onChange={onChange} value={comment.message}></textarea>
              <button onClick={addComment} className='btn btn-info'>Add comment</button>
            </div>
          </div>
          <div className="modal-footer">
            <div>
              <small className='text-start'>Created: {item.created.slice(0, 19)}</small>
            </div>

            <div className='d-flex justify-content-between gap-2'>
              <button type="button" className="btn btn-secondary" onClick={toggleModal} data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default ModalIssueDetails