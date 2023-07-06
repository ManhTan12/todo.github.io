import { createContext,useState } from "react";
const ThemeContext = createContext()

function Them({children}){
    const [theme,setTheme] = useState("light");
    const toggleTheme =() =>{
        setTheme((curr) =>(curr === "light" ? "dark" :"light"))
    }

    const value={
        theme,
        toggleTheme
    }
    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export {Them , ThemeContext};