import React, { useContext, createContext, useState } from "react";

const DirContext = createContext();

const DirProvider = ({ children }) => {
    const [Dir, setDir] = useState('ltr');

    const toggleDir = () => {
        setDir((prevDir) => (prevDir === 'ltr' ? 'rtl' : 'ltr'));
    };

    return (
        <DirContext.Provider value={{ Dir, toggleDir }}>
            {children}
        </DirContext.Provider>
    );
};

export { DirContext, DirProvider };
