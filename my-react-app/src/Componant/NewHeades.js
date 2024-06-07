
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
function NewHeades() {
  const navigate=useNavigate();
    return (
        
  <div>
    <h1>this is a new header</h1>
    <Button variant="contained" onClick={()=>{navigate(`/index`)}}>Hello world</Button>
   
    
    </div>
    );
  }
  
  export default NewHeades;  //اسم fun