import {useState} from "react"
import {postTweet} from '../context/TweeterContext'
import './AddTweet.css'
import { useUserName } from '../context/TweeterContext'
import { useAuthContext } from "../auth/AuthProvider"

export function AddTweet(){

    const [text, setText] = useState('')
    const [showError, setShowError] = useState(false);

    const {activeUser} = useAuthContext();
    const handleTextChange = (e) =>
    {
        setText(e.target.value);
        setShowError(text.length > 140);
    }

    const handleSubmitTweet = () =>
    {
        if(showError === true)
            return;
        const newTweet = {content: text, userName: activeUser, date: new Date().toISOString()}
        postTweet(newTweet);
        console.log(newTweet)
        setText("")
    }


    return(
        <div className="inputWrapper">
            <textarea value={text} placeholder="What you have in mind..." onChange={handleTextChange} onKeyUp={(e) => e.key === "Enter" && handleSubmitTweet()}></textarea>
            <div className={`Error ${!showError ? "hide" : ""}`}>The tweet can't contain more than 140 characters</div>
            <button onClick={handleSubmitTweet} disabled={showError}>Tweet</button>
        </div>



    )



}