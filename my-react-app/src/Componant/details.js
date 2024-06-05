import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"; //بتستقبل القيم

function  Deatels(){
    const navigate=useNavigate(); //بنقلنا من صفحه لاخرى
    const location=useLocation();
    var query=new URLSearchParams(location.search);
    console.log(query.get('id'))
return(

<div>
<button onClick={()=>{
    navigate('/table')
    }}
    >Back</button>
   <h1>This is Details</h1>
  
   <h1>{query.get('name')}</h1>


   </div>
)
} 
export default Deatels;