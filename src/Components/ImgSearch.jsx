import React from 'react'
import "./comp.css"
function ImgSearch() {
let imgArray=["https://picsum.photos/200/","https://picsum.photos/200/","https://picsum.photos/200/","https://picsum.photos/200/","https://picsum.photos/200/","https://picsum.photos/200/","https://picsum.photos/200/","https://picsum.photos/200/","https://picsum.photos/200/"]
return (
<>
<center>
    <h1>Image Search</h1>
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

<div className="container text-center">
<div className="row row-cols-1 row-cols-lg-3 g-1 g-lg-1">
  {
      imgArray.map((image, key)=>(<div className="col" key={key}> <img src={image} alt="Image" /></div>))
    }
  
</div>
</div>

</div>    
</center>
</> 

)
}

export default ImgSearch