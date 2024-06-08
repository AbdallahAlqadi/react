import '../style/details.css'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"; //بتستقبل القيم

function  Deatels(){
    const navigate=useNavigate(); //بنقلنا من صفحه لاخرى
    const location=useLocation();
    var query=new URLSearchParams(location.search);
    console.log(query.get('id'))
return(

<div>
<button onClick={()=>{  // بدل ما انشا function هاي بديل اسهل
    navigate('/table')
    }}
    >Back</button>
   <h1>This is Details</h1>
  <div className="card">
   <h1>Id: {query.get('name')}</h1>
   <h1>Name: {query.get('id')}</h1>
   <h1>Amount: {query.get('amount')}</h1>
   <h1>spendData: {query.get('spendData')}</h1>
   <h1>Category: {query.get('catrgory')}</h1>
   </div>
   </div>
)
} 
export default Deatels;