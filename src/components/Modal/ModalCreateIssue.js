import React from 'react'

const ModalCreateIssue = () => {
  return (
    <div>
      <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Create New Issue
      </button>


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Create New Issue</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className='mb-3'>
                  <label htmlFor="" className='form-label'>Title</label>
                  <input type="text" placeholder='Main issue...' className='form-control' />
                </div>
                <div className='mb-3'>
                  <label htmlFor="" className='form-label'>Description</label>
                  <textarea type="text" placeholder='Main issue...' className='form-control' rows="3"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Create</button>
            </div>
          </div>
        </div>
      </div></div>
  )
}

export default ModalCreateIssue