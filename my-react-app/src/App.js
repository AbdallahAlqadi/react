import {BrowserRouter,Link,Route,Routes} from'react-router-dom';
import NewHeades from './NewHeades';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'

const NavPage=()=>NewHeades  // بستدعي NewHeades
const page1=()=>Page1
const page2=()=>Page2
const page3=()=>Page3
const page4=()=>Page4
const ReportWebVitals=()=>reportWebVitals
function App() { //جزئيه routes بتتحقق اذا كبست على NewHeaders بعرض  محتواها
  return (
<BrowserRouter>

<div id="NavBar"> 
<ul>
  <Link to="/Home"> Home</Link>   
 
  </ul>
  <ul >  
    <Link to="/NewHeaders"> NewHeaders</Link>   
  </ul>
  <ul >
    <Link to="/page1"> Page1</Link>   
  </ul>
  <ul > 
  <Link to="/page2"> Page2</Link>   
  </ul>
  <ul>
  <Link to="/page3"> Page3</Link>  
  </ul>
  <ul >
  <Link to="/page4"> Page4</Link>    
  </ul>
  </div>
  <Routes>  
  <Route path='/Home' element={<index />}/>
    <Route path='/NewHeaders' element={<NewHeades />}/>
    <Route path='/page1' element={<Page1 />}/>
    <Route path='/page2' element={<Page2 />}/>  
      <Route path='/page3' element={<Page3 />}/>
      <Route path='/page4' element={<Page4 />}/>
  </Routes>



</BrowserRouter>
  );
}

export default App;
