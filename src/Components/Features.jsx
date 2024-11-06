import "./comp.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Placeholder from "./Placeholder";
function Features() {
    return (
    <>
<div className="paddingFeat">

      <h1>Features</h1>
      <br />
      <div className="container text-center">
        <div className="row">
          <div className="col">{Placeholder("Safe Search", "/SafeSearch")}</div>
          <div className="col">{Placeholder("Code Generator", "/CodeGenerator")}</div>
          <div className="col">{Placeholder("Translate",  "/Translate")}</div>  
        </div>
        </div>
</div>

      </>
  );
}

export default Features;
