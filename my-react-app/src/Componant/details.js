import { useNavigate } from "react-router-dom";

function  Deatels(){
    const navigate=useNavigate(); //بنقلنا من صفحه لاخرى
return(

<div>
<button onClick={()=>{
    navigate('/table')
    }}
    >Back</button>
   <h1>This is Details</h1>

   </div>
)
} 
export default Deatels;