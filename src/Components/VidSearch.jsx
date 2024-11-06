import React from 'react'
import "./comp.css"
import Placeholder from './Placeholder'
function VidSearch() {

let imgArray=["https://picsum.photos/200/","https://picsum.photos/200/","https://picsum.photos/200/","https://picsum.photos/200/","https://picsum.photos/200/","https://picsum.photos/200/","https://picsum.photos/200/","https://picsum.photos/200/","https://picsum.photos/200/"]

return (
<>
<center>
    <h1>Video Search</h1>
    <hr />
<div className="mypadser">
  <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Safe Search" aria-label="Search" aria-describedby="button-addon2" />
  <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>

</div>
{/* Content */}
<h2>
    Result
</h2>
</div> 
</center>
</> 

)
}

export default VidSearch