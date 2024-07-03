import React,{createContext,useState} from "react";


const DirContext=useContext();

const DirProvider=({children})=>{
    var [Dir,setDir]=useState('ltr');

    var toggleDir= () =>{
        setDir((prevDir)=>(prevDir==='ltr'?'rtl' : 'ltr'));
    }

    return(
        <DirContext.Provider  value={{Dir,toggleDir}}>
            {children}
        </DirContext.Provider>
    )
};

export {DirContext,DirProvider};