import { useState } from 'react'
import "./comp.css"
import { GoogleGenerativeAI } from "@google/generative-ai";


function Translate() {

    const langArray= ["English","Japanese","Chinese","Spanish","Russian","French","Tamil","Telugu","Marathi"]
    const[result,setResult]=useState("Translated content will appear here!!!")
    const transCont =async () => {
        try {
          let inpVal =document.getElementById("inpVal")
          let inputValue = inpVal.value;
          let langInpVal =document.getElementById("langSel").value

        const genAI = new GoogleGenerativeAI("xxx");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `Create a Translated string of the content of ${inputValue} in ${langInpVal} in formal context
        without any explaination `;
        const result = await model.generateContent(prompt);
      
            // Changing the response variable 
        setResult(`${result.response.text()} `)
         
        } catch (error) {
            console.error(error);
        }
      };
      


    return (
    <>
    <h1>
        Translate
    </h1>
    {/* Form Component */}
<div className="mainBody">

  
<center>
    
<select className="form-select langselc" id='langSel' aria-label="Default select example">
  <option value="hindi" selected>Hindi</option>
  {
    langArray.map((lang, key) => (
      <option key={key} value={lang}>{lang}</option>
    ))
  }
</select>
   
    
<div className="mb-3">

  <textarea className= "formwid form-control" placeholder='Type the content here!!!' id="inpVal" rows="3"></textarea>
</div>
    </center>
<center>

<button onClick={transCont} type="button" className="myBtn btn btn-light">Translate</button>
</center>
</div>

<br />
<hr />
<br />

 
<div className="result">
    <center>

<div className="card rescard">
  <div className="card-header">
  Translation
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>
    {result}    
      </p>
    </blockquote>
  </div>
</div>
    </center>


</div>
  



    </>
  )
}

export default Translate