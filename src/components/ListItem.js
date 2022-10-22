import React from 'react'
import ModalIssueDetails from './Modal/ModalIssueDetails'

const ListItem = () => {
  return (
    
    <div className='rounded'>

    <button type="button" className="list-group-item list-group-item-action"><div className='d-flex justify-content-between' data-bs-toggle="modal" data-bs-target="#issueModal">
      <div><h5>Issue</h5><p>Status</p></div>
      <div><h5>User</h5><p>Created at:</p></div>
    </div>
    </button>
    <ModalIssueDetails />
    </div>
    
    
  )
}

export default ListItem