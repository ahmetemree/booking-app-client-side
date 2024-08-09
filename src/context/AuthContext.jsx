import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{

    const [currentUser,setCurrentUser] =useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const [lastData, setLastData] = useState()

    const updateUser =(data)=>{
        setCurrentUser(data);
    }

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))
    },[currentUser])
    return(
        <AuthContext.Provider value={{updateUser, currentUser,setLastData,lastData}}>{children}</AuthContext.Provider>
    )
}