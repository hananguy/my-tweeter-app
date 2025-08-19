import { createContext, useContext } from "react";
import { useState, useEffect} from "react";
import {useNavigate, Navigate} from 'react-router'
import { supabase } from "../data/supabase";
const AuthContext = createContext(null);


export function AuthProvider({children}){

  const [activeUser, setActiveUser] = useState(null);
  const navigate = useNavigate();
  const handleLogin = async (email, password) =>{
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if(error)
    {
        console.log(error);
        return new Error("User not found");
    }

    else
    {
        setActiveUser(activeUser)
    }

      
  }
    useEffect(() =>
    {
        if (activeUser !== null)
            {
                navigate("/profile");
            }
     }, [activeUser]);

  const handleLogout = async() => {
    const {error} = await supabase.auth.signOut();
    if(error)
    {
        console.log(error);
        throw error;
    }
    else
    {
        setActiveUser(null);
        navigate('/')
    }
    
  }

    return(
        <AuthContext value={{activeUser, setActiveUser, onLogin: handleLogin, onLogout: handleLogout}}>
            {children}
        </AuthContext>
    )
}
export const useAuthContext = () =>
{
    return useContext(AuthContext);
}