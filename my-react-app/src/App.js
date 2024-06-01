import './style/styleapp.css'
import {BrowserRouter,Link,Route,Routes} from'react-router-dom';
import NewHeades from './Componant/NewHeades';
import Page1 from './Componant/Page1';
import Page2 from './Componant/Page2';
import Page3 from './Componant/Page3';
import Counter from './Componant/counter';
import reportWebVitals from './reportWebVitals';
import ClasssPage from './Componant/Classcomponant';
import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom'


function App() { //جزئيه routes بتتحقق اذا كبست على NewHeaders بعرض  محتواها

  return (
<BrowserRouter>

<div id="nav"> 

<ul className='divUl'>
  <li><Link className='navButton' to="/Home"> Home</Link>   </li>
  <li><Link className='navButton' to="/NewHeaders"> NewHeaders</Link>   </li>
  <li> <Link className='navButton' to="/Class"> Class</Link>  </li>
  <li> <Link className='navButton' to="/page1"> Page1</Link>   </li>
  <li>  <Link className='navButton' to="/page2"> Page2</Link>   </li>
  <li><Link className='navButton' to="/page3"> Page3</Link>  </li>
  <li><Link className='navButton' to="/counter"> Counter</Link>  </li>
  </ul>
  </div>

  <Routes>  
  <Route path='/Home' element={<index />}/>
  <Route path='/Class' element={<ClasssPage />}/>
    <Route path='/NewHeaders' element={<NewHeades />}/>
    <Route path='/page1' element={<Page1 />}/>
    <Route path='/page2' element={<Page2 />}/>  
      <Route path='/page3' element={<Page3 />}/>
      <Route path='/counter' element={<Counter />}/>
  </Routes>



</BrowserRouter>
  );
}

export default App;
