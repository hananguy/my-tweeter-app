import { Children } from "react"
import { Navigate } from "react-router"
import { useAuthContext } from "./AuthProvider";


export function ProtectedRoute({children}) {
     const {activeUser} = useAuthContext();
    if(!activeUser) return <Navigate to='/' replace />

    return(
        <>
        {children}
        </>
    )

}