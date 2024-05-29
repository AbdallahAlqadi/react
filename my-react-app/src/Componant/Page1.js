
import Typography from'@mui/material/Typography';
import Rating from'@mui/material/Rating';
import React,{useState} from'react'

function Page1() {
  var [value,setValue]=useState()
    return (
        
  <div>
    <h1>this is a Page1</h1>
  

    <Typography component="legend">Controlled</Typography>
<Rating
  name="simple-controlled"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>
<Typography component="legend">Read only</Typography>
<Rating name="read-only" value={value} readOnly />
<Typography component="legend">Disabled</Typography>
<Rating name="disabled" value={value} disabled />
<Typography component="legend">No rating given</Typography>
<Rating name="no-value" value={null} />

    </div>
    



  


    );
  }
  
  export default Page1; 