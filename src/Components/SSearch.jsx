import "./comp.css"
import { GoogleGenerativeAI } from "@google/generative-ai";

function SSearch() {

const ResultFunc =async () => {
  try {
    let inpVal =document.getElementById("inpVal")
    let inputValue = inpVal.value;
    const genAI = new GoogleGenerativeAI("AIzaSyDEMaUTq6Oeqg50Iz4cGptHRQIeEnexwM4");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Generate a paragraph on the topic of ${inputValue} if the content to be generated is vulgar than return the string "No Result".`;
    const result = await model.generateContent(prompt);
    
    // Changing the response variable 
    const resVal =(`${result.response.text()} `)
    
    let  pval =document.getElementById("paragraph")
    console.log(pval.innerHTML);   
    pval.innerHTML=""
    pval.innerText=`${resVal}`


  } catch (error) {
      console.error(error);
  }
};

// Alternate Method
return (
<>
    <h1>Safe Search</h1>
    <hr />
<div className="mypadser">

  <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Safe Search" aria-label="Search" aria-describedby="button-addon2" id='inpVal' />
  <button onClick={ResultFunc} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
</div>
{/* Content */}
<h2>
    Result
</h2>
<p id='paragraph' className="placeholder-wave">
  <span className="placeholder col-12"></span>
  <span className="placeholder col-12"></span>
  <span className="placeholder col-12"></span>
  <span className="placeholder col-12"></span>
</p>

</div>
</> 

)
}

export default SSearch