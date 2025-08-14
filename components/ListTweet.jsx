import { useTweetsContext } from '../context/TweeterContext';
import { TweetItem } from './TweetItem';
import './ListTweet.css'

export function ListTweet() {


    const tweets = useTweetsContext();


         return(
            <div className="TweetsContainer">
            {[...tweets].sort((a, b) => new Date(b.data.time) - new Date(a.data.time))
            .map((tweet, index) => <TweetItem key={index} userName={tweet.data.userName} text={tweet.data.text} time={tweet.data.time}/>)}
            </div>
    )

}