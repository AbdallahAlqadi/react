import React,{useRef} from "react";


const UseRefExample=()=>{
const inputRef=useRef(null);
const focusInput=()=>{
    inputRef.current.focus();
}


return(
    <>
    <input type="text" placeholder="focus me " ref={inputRef}></input>
    <input type="text" placeholder="New"></input>
    <button onClick={focusInput}>focus input</button>

    
    </>
)
}

export default UseRefExample;