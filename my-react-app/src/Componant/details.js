import '../style/details.css'

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"; //بتستقبل القيم

function  Deatels(){
    const navigate=useNavigate(); //بنقلنا من صفحه لاخرى
    const location=useLocation();
    const item=location.state;
   
return(

<div>
<button onClick={()=>{  // بدل ما انشا function هاي بديل اسهل
    navigate('/table')
    }}
    >Back</button>
    <div>
        {item ?(  // شرط انه بحال ما في بيانات يطبع This is Details

            <>
               <h1>This is Details</h1>

            <div className="card">
   <h1>Id: {item.id}</h1>
   <h1>Name: {item.name}</h1>
   <h1>Amount: {item.amount}</h1>
   <h1>spendData: {item.spendData}</h1>

   <h1>Category: {item.catrgory}</h1>

   </div>
            
            </>
        ):(<>there is no data</>)}
    </div>
  
   </div>
)
} 





export default Deatels;