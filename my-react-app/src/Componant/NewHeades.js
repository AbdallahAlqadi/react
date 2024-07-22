
import  React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';


//بشرح اولويات FUNCTION




function ApiData({url,children}){

const [data,setData]=useState(null);


useEffect(()=>{

fetch(url)
.then(res=>res.json)
.then(data=>setData(data))

},[url]);
return children(data)
};





function withLoading(Component){

  return function WithComponentLoading({isLoading,...props}){
    if(isLoading){
      return <p>Loading.....</p>
    }

    return <Component {...props}/>;
  };
}

  function DataDisplay({data}){
return(

  <>
  {data.map(item=>(
    <div key={item.name}>
<h1>{item.alpha_two_code}</h1>
<h1>{item.name}</h1>


    </div>
  ))}
  
  </>
)

  }





const DisplayDataWithLoading = withLoading(DataDisplay);


function NewHeades() {
  const [data,setData]=useState(null);
  const [isLoading,setIsLoading]=useState(true);

useEffect(()=>{

  fetch('http://universities.hipolabs.com/search?country=United+States')
  .then(res=> res.json())
  .then(data=>{
    setData(data)
    setIsLoading(false)
  });
},[])

  const navigate=useNavigate();
    return (
        
  <div>


    <h1>this is a new header</h1>

<DisplayDataWithLoading isLoading={isLoading} data={data}/>

    <Button variant="contained" onClick={()=>{navigate(`/index`)}}>Hello world</Button>
   
    
    </div>
    );
  }
  
  export default NewHeades;  //اسم fun