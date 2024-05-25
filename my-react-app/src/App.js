import {BrowserRouter,Link,Route,Routes} from'react-router-dom';
import NewHeades from './NewHeades';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
const NavPage=()=>NewHeades

function App() {
  return (
<BrowserRouter>
<div>
  <ul>

    <Link to="/nav">nav</Link>
  </ul>
  <Routes>
    <Route path='/nav' element={<NewHeades />}/>

   
  </Routes>
</div>


</BrowserRouter>
  );
}

export default App;
