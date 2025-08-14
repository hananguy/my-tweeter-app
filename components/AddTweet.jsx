import {useState} from "react"
import {useTweeterDispatchContext} from '../context/TweeterContext'
import './AddTweet.css'



export function AddTweet(){

    const [text, setText] = useState('')
    const [showError, setShowError] = useState(false);
    const dispatch = useTweeterDispatchContext();

    const handleTextChange = (e) =>
    {
        setText(e.target.value);
        setShowError(text.length > 140);
    }

    const handleSubmitTweet = () =>
    {
        if(showError === true)
            return;
        dispatch({ type: "ADD", data: {userName: "Guy", text, time: new Date().toLocaleString()}})
        setText("")
        console.log(JSON.parse(localStorage.getItem("tweets:v1")))
    }


    return(
        <div className="inputWrapper">
            <textarea value={text} placeholder="What you have in mind..." onChange={handleTextChange} onKeyUp={(e) => e.key === "Enter" && handleSubmitTweet()}></textarea>
            <div className={`Error ${!showError ? "hide" : ""}`}>The tweet can't contain more than 140 characters</div>
            <button onClick={handleSubmitTweet} disabled={showError}>Tweet</button>
        </div>



    )



}