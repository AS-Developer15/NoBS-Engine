import "./comp.css"
import { GoogleGenerativeAI } from "@google/generative-ai";


function CodeGen() {

    const langArray= ["JavaScript","HTML CSS and JS","C","Psuedo Code","Java","Go","SQL"]
    const codeGen =async () => {
        try {
          let selVal = document.getElementById("selector").value
          let inpVal =document.getElementById("inpVal")
          let inputValue = inpVal.value;
          let contentVal = document.getElementById("contentGen")

        const genAI = new GoogleGenerativeAI("AIzaSyDEMaUTq6Oeqg50Iz4cGptHRQIeEnexwM4");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `Generate ${selVal} code for the input of ${inputValue}.`;
        const result = await model.generateContent(prompt);
        const fResult = result.response.text()
      
         // Changing the response variable 
        contentVal.innerText=`${fResult}` 
         
        } catch (error) {
            console.error(error);
        }
      };
      

    return (
    <>
    <h1>
Code Generator
    </h1>
    {/* Form Component */}
<div className="mainBody">

  
<center>
    
<select className="form-select langselc" id='selector' aria-label="Default select example">
  <option value="Python" selected>Python</option>
  {
    langArray.map((lang, key) => (
      <option key={key} value={lang}>{lang}</option>
    ))
  }
</select>
   
    
<div className="mb-3">

  <textarea className= "formwid form-control" placeholder='Type the prompt to be generated here!!!' id="inpVal" rows="3"></textarea>
</div>
    </center>
<center>

<button onClick={codeGen} type="button" className="myBtn btn btn-light">Generate Code</button>
</center>
</div>

<br />
<hr />
<br />

 
<div className="result">
    <center>

<div className="card rescard">
  <div className="card-header">
  Code Generated
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p id="contentGen">
      </p>
    </blockquote>
  </div>
</div>
    </center>


</div>
  



    </>
  )
}

export default CodeGen