  //   import React(اسم fun) from 'react'(اسم الصفحه);
  import React from 'react';//هاي مهمه
import ReactDOM from 'react-dom/client';//هاي مهمه
import './index.css';
import App from './App'; //هاي مهمه
import NewHeades from './Componant/NewHeades'; //هاي مهمه
import reportWebVitals from './reportWebVitals';//هاي لا 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(   
   // <App />   اسم fun 
  <React.StrictMode>
    <App />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
