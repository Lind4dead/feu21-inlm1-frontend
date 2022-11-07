import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const DeleteIssue = ({issue}) => {

  const navigate = useNavigate()

  const removeIssue = async e => {
    console.log(issue.id)
    await axios.delete('https://localhost:7035/api/issues/' + issue.id)
    navigate('/')
    document.body.classList.remove('modal-open')
    let elements = document.getElementsByClassName("modal-backdrop")
    elements[0].remove()

  }

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Do you really want to delete this issue?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">No</button>
            <button type="button" id={'trash-' + issue.id} className="btn btn-success" onClick={removeIssue}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteIssue