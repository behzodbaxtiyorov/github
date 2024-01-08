

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "./components/useFetch";

const url = "https://api.github.com/users/behzodbaxtiyorov/repos";


const AppContext = createContext();

const AppProvider = ({children}) => {

    const [data, setData] = useState(true);
    const [loading, setLoading] = useState(false);


    const [repo] = useFetch(url);



    

    return (
        <AppContext.Provider value={{
            data,
            setData,
            repo
        }}>
            {children}
        </AppContext.Provider>
    )
}



export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};



