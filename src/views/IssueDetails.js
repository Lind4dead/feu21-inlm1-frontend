import axios from 'axios'
import React from 'react'
import { useCallback } from 'react'
import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Comments from '../components/Comments'
import DeleteIssue from '../components/Modal/DeleteIssue'
import { UserContext } from '../contexts/userContext'



const IssueDetails = () => {

  const { user } = useContext(UserContext)
  const { id } = useParams()
  const [issue, setIssue] = useState()
  const [comments, setComments] = useState([])
  const navigate = useNavigate()

  const [comment, setComment] = useState({
    message: '',
    issueId: ''
  })

  const onChange = (e) => {
    setComment({
      message: e.target.value,
      issueId: issue.id
    })
  }

  const addComment = async () => {
    await axios.post("https://localhost:7035/api/comments", comment, {
      headers: {
        'Authorization': `Bearer ${user}`
      }
    })

    setComment({
      message: '',
      issueId: issue.id
    })
    getIssue()

  }

  const getIssue = useCallback(async (e) => {
    const res = await axios.get('https://localhost:7035/api/issues/' + id)
    setIssue(res.data)
    setComments(res.data.comments)
  }, [id]);


  const changeSelect = e => {
    updateIssue(Number(e.target.value))
  }

  const updateIssue = async value => {
    const res = await axios.put('https://localhost:7035/api/issues/' + id, { statusId: value })
    setIssue(state => ({
      ...state,
      status: res.data.status,
      statusId: res.data.statusId
    }))
  }



  useEffect(() => {


    getIssue()
  }, [getIssue])


  return (
    <div className='border container mt-5 rounded'>
      {issue &&
        <div>
          <DeleteIssue issue={issue} />
          <div className='mt-2 d-flex align-items-center justify-content-between'>
            <i className="fa-solid fa-arrow-left fs-4" onClick={() => navigate("/")}></i>
            <h3 className='text-center'>{issue.subject}</h3>
            <i className="fa-solid fa-trash text-danger fs-5" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </div>
          <div className='m-auto w-75 mt-3 mb-5'>
            <p className='text-center'>{issue.message}</p>
          </div>
          <div className='d-flex justify-content-between align-items-center mb-2'>
            <div>
            <p><span className='fw-bold'>Created by: </span>{issue.email}</p>
            <p><span className='fw-bold'>Created: </span>{issue.created.slice(0, 19)}</p>
            </div>
            <select className='form-select w-auto' name="status" id="" value={issue.statusId} onChange={changeSelect}>
              <option value="1">Not started</option>
              <option value="2">Ongoing</option>
              <option value="3">Closed</option>
            </select>
          </div>
          <div className='border-top comments-wrapper d-flex flex-column justify-content-center align-items-center'>

            <div className='w-50 d-flex flex-column gap-3 mt-3'>{comments && comments.map(comment => <Comments key={comment.id} comment={comment} />)}</div>
            <div className='w-50 my-2 d-flex justify-content-center flex-column gap-2 flex-fill'>
              <textarea className='form-control' name="message" id="" cols="10" rows="3" onChange={onChange} value={comment.message}></textarea>
              <button onClick={addComment} className='btn btn-info'>Add comment</button>
            </div>
          </div>

        </div>
      }
    </div>
  )
}

export default IssueDetails