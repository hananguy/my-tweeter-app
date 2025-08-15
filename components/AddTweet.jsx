import {useState} from "react"
import {postTweet} from '../context/TweeterContext'
import './AddTweet.css'



export function AddTweet(){

    const [text, setText] = useState('')
    const [showError, setShowError] = useState(false);

    const handleTextChange = (e) =>
    {
        setText(e.target.value);
        setShowError(text.length > 140);
    }

    const handleSubmitTweet = () =>
    {
        if(showError === true)
            return;
        const newTweet = {content: text, userName: "Guy", date: new Date().toISOString()}
        postTweet(newTweet);
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