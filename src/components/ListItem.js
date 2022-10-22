import React from 'react'
import ModalIssueDetails from './Modal/ModalIssueDetails'

const ListItem = ({item}) => {
  return (
    
    <div>

    <button type="button"  className={"list-group-item list-group-item-action " + (item.completed && "bg-success")}><div className='d-flex justify-content-between' data-bs-toggle="modal" data-bs-target={'#issueModal' + item.id}>
      <div className='d-flex justify-content-between flex-column'><h5>Issue</h5><p>{item.completed ? "Completed" : "Ongoing"}</p></div>
      <div><h5>{item.user}</h5><p>Created at: </p><small className='fst-italic'>{item.createdAt}</small></div>
    </div>
    </button>
    <ModalIssueDetails item={item}/>
    </div>
    
  )
}

export default ListItem