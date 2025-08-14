
import './TweetItem.css'
export const TweetItem = ({userName, text, time}) =>{


    return(
        <li className="tweet-container">

                <div className="tweet-titles">
                    <span>{userName}</span>
                    <span>{time}</span>
                </div>
                
                <p>{text}</p>
        </li>
    )


}