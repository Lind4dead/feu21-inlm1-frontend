import axios from 'axios'
import { useContext } from 'react'
import { useState } from 'react'
import { UserContext } from '../../contexts/userContext'

const ModalCreateIssue = () => {

  const [newIssue, setNewIssue] = useState({
    subject: '',
    message: ''
  })

  const { user } = useContext(UserContext)

  const onChange = e => {
    setNewIssue(state => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await axios.post('https://localhost:7035/api/issues', newIssue, {
      headers: {
        'Authorization': `Bearer ${user}`
      }
    })
    setNewIssue(state => ({
      ...state,
      subject: '',
      message: ''
    }))
    
  }

  return (
    <div>
      <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#createModal">
        Create New Issue
      </button>


      <div className="modal fade" id="createModal" tabIndex="-1" aria-labelledby="createModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="createModalLabel">Create New Issue</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}> 
                <div className='mb-3'>
                  <label htmlFor="" className='form-label'>Title</label>
                  <input value={newIssue.subject} onChange={onChange} name="subject" type="text" placeholder='Main issue...' className='form-control' />
                </div>
                <div className='mb-3'>
                  <label htmlFor="" className='form-label'>Description</label>
                  <textarea value={newIssue.message} onChange={onChange} name="message" type="text" placeholder='Describe your issue...' className='form-control' rows="3"></textarea>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Create</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalCreateIssue