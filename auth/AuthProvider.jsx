import { createContext, useContext } from "react";
import { useState } from "react";
import {useNavigate, Navigate} from 'react-router'
const AuthContext = createContext(null);


export function AuthProvider({children}){

  const [activeUser, setActiveUser] = useState(null);
  const navigate = useNavigate();
  const handleLogin = (email, password) =>{
    setTimeout(() =>{
        setActiveUser('Guy');//Hardcoded for now
        navigate('/home')
    }, 1000)
      
  }


  const handleLogout = () => {
    setActiveUser(null);
    navigate('/login')
  }



    return(
        <AuthContext value={{activeUser, onLogin: handleLogin, onLogout: handleLogout}}>
            {children}
        </AuthContext>
    )
}
export const useAuthContext = () =>
{
    return useContext(AuthContext);
}