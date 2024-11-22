import React from 'react'
import "./comp.css"
import { Link } from 'react-router-dom'

function Information() {
  return (
<>
<div className="mypadser">

<h1>
    Information Pannel
</h1>
<hr />

<dl className="row">
  <dt className="col-sm-3"><h1 className="display-6">Safe Search</h1></dt>
  <dd className="col-sm-9">
    <p> Safe search is essential for protecting children from inappropriate or explicit content while they browse the internet. By enabling safe search options, you can help filter out harmful results and create a safer online environment for kids. This is particularly important as children may not always have the judgment or maturity to distinguish between safe and harmful content.</p>
   <Link to={"/SafeSearch"}>
  <button type="button" className="btn btn-dark">Check Now</button>
  </Link>

  <hr />
  </dd>
  
<br />
<br />

  <dt className="col-sm-3"><h1 className="display-6">Code Generator</h1></dt>
  <dd className="col-sm-9">
    <p>Code generators are powerful tools that can significantly boost developer productivity. By providing code snippets, entire functions, or even complete programs based on natural language prompts, these tools automate repetitive tasks, reduce human error, and accelerate development cycles. They can be used for a wide range of tasks, including generating boilerplate code, implementing algorithms, and translating code between languages. </p>
    
    <Link to={"/CodeGenerator"}>
    <button type="button" className="btn btn-dark">Check Now</button>
    </Link>
    
    <hr />
    </dd>

<br/>
<br/>

    <dt className="col-sm-3"><h1 className="display-6">Translate</h1></dt>
  <dd className="col-sm-9">
    <p>
    Safe Translate, a feature offered by NoBS Engine, provides a more secure translation experience. By utilizing advanced machine learning techniques, Safe Translate ensures that your translations remain confidential and secure. This feature is particularly useful for individuals who handle sensitive information and require discreet translations.
    </p>
    <Link to={"/Translate"}>
    <button type="button" className="btn btn-dark">Check Now</button>
    </Link>
<hr />
  </dd>

  <br/>
  <br/>

    <dt className="col-sm-3"><h1 className="display-6">Code</h1></dt>
  <dd className="col-sm-9">
    <p>
    Curious about the inner workings of NoBS Engine?
    <br />
      The source code for NoBS Engine is availiable in open source. <br /> Check out the official source code for the NoBS Engine from Github. <br />
      "https://github.com/AS-Developer15/NoBS-Engine/tree/main"
    </p>
    <a href="https://github.com/AS-Developer15/NoBS-Engine/tree/main" rel="noopener noreferrer" >
     <button type="button" className="btn btn-dark">Check Now</button>
     </a>
<hr />
  </dd>



</dl>
</div>
</> 
)
}

export default Information