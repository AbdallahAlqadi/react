import React, { useState } from "react";
// hooks > usestate
function Counter(){
    var [count,setCount]=useState(0);
    return(
     
        <>
        <h1>Yoy Clicked This Button {count}</h1>
        <button onClick={()=>setCount(count+1)}>Click</button>
        </>
    )
}

export default Counter;