import { createContext, useContext, useReducer } from "react";

const TweetsContext = createContext(null);
const TweetsDispatchContext = createContext(null);


export function TweetsProvider({children}){

    const [tweets, dispatchTweets] = useReducer(tweetsReducer, [])

    return(
        <TweetsContext value={tweets}>
            <TweetsDispatchContext value={dispatchTweets}>
                {children}
            </TweetsDispatchContext>
        </TweetsContext>
    )
}


export function useTweetsContext(){
    return useContext(TweetsContext);
}

export function useTweeterDispatchContext(){
    return useContext(TweetsDispatchContext)
}


const tweetsReducer  = (tweets, action) =>
{
  switch (action.type) {
    case "ADD":
      return tweets.concat({
        id: Date.now(),
        data: {userName: action.data.userName,
                text: action.data.text,
                time: action.data.time
        }
      });
    case "DELETE":
      return tweets.filter((tweet) => tweet.id !== action.data);
    case "TOGGLE":
      return tweets.map((tweet) =>
        tweet.id === action.data ? { ...tweet, completed: !tweet.completed } : tweet
      );
    default:
      return tweets;
  } 
}