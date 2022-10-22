import React from 'react'
import ListItem from '../components/ListItem'
import ModalCreateIssue from '../components/Modal/ModalCreateIssue'

const Home = () => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-between my-3'>
        <h1>Issues</h1>
        <ModalCreateIssue />
      </div>
      <div className="list-group">
        <ListItem />
      </div>
    </div>
  )
}

export default Home