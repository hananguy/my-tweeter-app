
import './TweetItem.css'
export const TweetItem = ({userName, content, date}) =>{


    return(
        <li className="tweet-container">

                <div className="tweet-titles">
                    <span>{userName}</span>
                    <span>{date}</span>
                </div>
                
                <p>{content}</p>
        </li>
    )


}