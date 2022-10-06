import { useCallback, useState } from "react"


export const useAuth = () => {

    const [token, setToken] = useState(false)
    const [tokenExpirationDate, setTokenExpirationDate] = useState()
    const [userId, setUserId] = useState(false); 


    const login = useCallback(() => {


    

    }, []);


    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem('userData');
    }, [])

    
    return {token, login, logout, userId}

}