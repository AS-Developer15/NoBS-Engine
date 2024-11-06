import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'
function Placeholder(name,link) {
  return (
  <>
  <div className="card">
  <img src="https://picsum.photos/200/" className="card-img-top" alt="..." />

  <div className="card-body">
    <h5 className="card-title">{name}</h5>
<Link to={link}>
  <h6>
   Check Now
  </h6>
</Link>
  </div>
</div>

  </>
  )
}

export default Placeholder