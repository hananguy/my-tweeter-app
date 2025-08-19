import './UserLogin.css'
import { useUserName } from '../context/TweeterContext'
import {useState} from "react";
import { useAuthContext } from '../auth/AuthProvider';


export default function UserLogin()
{   
    const [text, setText] = useState("")
    const {setActiveUser} = useAuthContext();

    // const {userName, setUserName} = useUserName();

    const updateText = (event) =>{
        setText(event.target.value)
    }
    const updateUserName = () =>{
        setActiveUser(text)
        setText("")
    }

    return(
        <div className="userLogin-container">
            <h1>Profile</h1>
            <span>User Name</span>
            <input type="text" value={text} onChange={updateText} placeholder="Type your username..."></input>
            <button onClick={updateUserName}>Save</button>
        </div>
    )



}