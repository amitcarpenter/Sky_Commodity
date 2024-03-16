
import React, { useState } from "react";

const AppContext = React.createContext();

//to create a provider function

const AppProvider = ({ children }) => {
    
    const [steper, setsteper] = useState(1)

    return (
        <AppContext.Provider value={{ steper, setsteper }}>
            {children}
        </AppContext.Provider>
    )

}


export { AppProvider, AppContext }