import { dividerClasses } from "@mui/material";
import React, {createContext, useContext, useState} from "react";

const ThemeContext =createContext();
function App(){
    console.log("It came to App!")
    const [theme, setTheme] = useState('light');
    const toggleTheme =()=>{
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <Toolbar />
            <button onClick={toggleTheme}>Toggle theme</button>
                         
        </ThemeContext.Provider>
    );

}
function Toolbar(){
    const theme = useContext(ThemeContext);
     console.log("It came to Toolbar!", theme.theme)
  //const theme ='dark'
    return (
        // <div>
        //     <p>
        //         {/* {theme.theme} */}
        //     </p>
        // </div>
        <div style={{backgroundColor: theme.theme === 'light' ? '#FFF' : '#333',
            color: theme.theme === 'light' ? '#000' : '#FFF', height:'100px'

            }}>
            current theme:{theme.theme}
                </div>
                );
            
}
export default App;