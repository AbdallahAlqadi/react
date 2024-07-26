import React, { createContext, useState } from 'react';

const DirContext = createContext();

const DirProvider =({children})=> {
  const [dir, setDir] = useState("ltr");

  const toggleDir = () =>
  {
    if(dir === 'ltr'){
        setDir('rtl')
    }
    else
    {
        setDir('ltr')
      console.log(dir)
    }
  }

  return (
    <DirContext.Provider value={{dir,toggleDir}}>
        {children}
      
    </DirContext.Provider>
  );
}

export {DirContext,DirProvider};