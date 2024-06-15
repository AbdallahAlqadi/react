import React,{createContext,useContext,useEffect,useState} from "react";

var ThemeContext=createContext();
var ThemeProvider=({children})=>{
    var [theme,setTheme]=useState('light');
    var toggletheme= ()=>{
   if(theme==='light'){
     setTheme('dark')
     console.log(theme)
   }
   else{
     setTheme('light')
     console.log(theme)
   
   }
    }

    return(
<ThemeContext.Provider value={{theme,toggletheme}}>
    {children}
</ThemeContext.Provider>


    )
    
}




export {ThemeProvider,ThemeContext};