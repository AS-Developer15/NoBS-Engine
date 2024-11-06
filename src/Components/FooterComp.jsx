import React from 'react'
import "./comp.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'

function FooterComp() {
  return (
    <div>
    <br />
    <footer className='bg-light-subtle text-light-emphasis position-sticky bottom-0 '>
    <div className="container text-center">
  <div className="row myfd  ">
 
    <div className="col"> <Link to="/"> Home </Link></div>
    <div className="col"> <Link to="/Info" >Information</Link> </div>
    <div className="col"><a href="tel:+919870822759"> Phone</a></div>
    <div className="col"><a href="mailto:Aradhyamaria12@gmail.com"> Email Us</a></div>
  </div>
</div>
<hr />
<h6>
    AS.Developer and Paritosh Chandel Ltd
</h6>
    </footer>

    </div>
  )
}

export default FooterComp