import React, { useState } from "react";
function Page3() {
  var [value,Setvalue]=useState(0);
    return (
      
  <div>

    <h1>this is a Page3 {value}</h1>
  <button onClick={()=>Setvalue(value++)}>click</button>
    </div>
    );
  }
  
  export default Page3; 