
import { Link } from 'react-router-dom'


const ListItem = ({ item }) => {







  return (

    <div>

      <Link className='text-decoration-none' to={`/details/${item.id}`}>
        <button type="button" className={"list-group-item list-group-item-action"}>
          <div className='d-flex justify-content-between' >
            <div className='d-flex justify-content-between flex-column gap-2'><p><span className='fw-bold'>Created by: </span>{item.email}</p><h5>{item.subject}</h5><p>{item.status}</p></div>
            <div><h5>{item.user}</h5><p>Created at: </p><small className='fst-italic'>{item.created.slice(0, 19)}</small></div>
          </div>
        </button></Link>

    </div>

  )
}

export default ListItem