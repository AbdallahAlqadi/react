import './App.css';
import React, { useContext, useEffect } from 'react';
import { DirProvider } from './Componant/dir';
// import { Box, AppBar, Toolbar, Container, Grid, Typography, IconButton, Button } from '@mui/material';
// import { Facebook as FacebookIcon, Twitter as TwitterIcon, Instagram as InstagramIcon } from '@mui/icons-material';
import ClasssPage from './Componant/Classcomponant';
// import Page1 from './Componant/Page1';
// import Page3 from './Componant/Page3';
//  import Counter from './Componant/counter';
import NewHeaders from './Componant/NewHeades';
import TableWithState from './Componant/table';
import Details from './Componant/details';
// import LifecycleDemo from './Componant/life';
import UseRefExample from './Componant/useRef';
import UseReducerExample from './Componant/reducer';
import { ThemeContext,ThemeProvider } from './Componant/theme'; // Make sure this path is correct
import { DirContext } from './Componant/dir';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';



function App() {

 

  return (
    <ThemeProvider>
    <DirProvider>
    
      <BrowserRouter>  
        <div className="App">
          <ul>
            <ThemeToggleButton/>
            <DirToggleBtn/>
            <Link to='/table'><button className='btn btn1'>Click To Show Table</button></Link>
            <Link to='/classComponent'><button className='btn btn1'>Click To Show Class Component</button></Link>
            <Link to='/apiComponent'><button className='btn btn1'>Click To Show api Component</button></Link>
            <Link to='/useRef'><button className='btn btn1'>Click To Show UseRefExample</button></Link>
            <Link to='/useReducer'><button className='btn btn1'>Click To Show UseReducerExample</button></Link>

            


          </ul>
        </div>

        <Routes>

          <Route path='/table' element={<TableWithState />}></Route>
          <Route path='/details' element={<Details />}></Route>
          <Route path='/classComponent' element={<ClasssPage />}></Route>
          <Route path='/apiComponent' element={<NewHeaders />}></Route>
          <Route path='/useRef' element={<UseRefExample />}></Route>
          <Route path='/useReducer' element={<UseReducerExample />}></Route>





        </Routes>
      </BrowserRouter>
             

      </DirProvider>
    </ThemeProvider>
   
  );
}


export default App;
const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <button className='btn btn1 dirBtn' onClick={toggleTheme}>
      Change to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  );
}


const DirToggleBtn =()=>{
const {dir,toggleDir} = useContext(DirContext);

useEffect(()=>{
  document.body.className = dir;

},dir)

return(
  <button onClick={toggleDir} className='btn btn1 dirBtn'>
    Change to {dir==='ltr'?'rtl':'ltr'} Dir
  </button>
)
}


