import React from 'react'

const Comments = ({comment}) => {
  return (
    <div className='w-100'>
      <div className='d-flex justify-content-between'>
      <span className='comment-name'>{comment.userName}</span>
      <span className='comment-time'>{comment.created.slice(0,19)}</span>
      </div>
    <div className='border rounded-pill py-1 px-3'>
      <p className='comment-text'>
      {comment.message}
      </p>
    </div>
    </div>
  )
}

export default Comments