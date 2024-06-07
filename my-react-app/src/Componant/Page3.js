import { Button } from "@mui/material";
import React, { useState } from "react";

function Page3() {
  var [value,Setvalue]=useState(0);
    return (
      
  <div>

    <h1>this is a Page3 {value}</h1>
  <Button variant="contained" onClick={()=>Setvalue(value+=3)}>click</Button>
    </div>
    );
  }
  
  export default Page3; 