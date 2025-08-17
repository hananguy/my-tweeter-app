import { createContext, useContext, useReducer, useEffect, useState } from "react";
import axios from 'axios';
const TweetsContext = createContext(null);
const TweetsDispatchContext = createContext(null);
const UserNameProvider = createContext("");

export function TweetsProvider({children}){
    const [userName, setUserName] = useState("");
    const [tweets, dispatchTweets] = useReducer(tweetsReducer, []);


    return(
        <TweetsContext value={tweets}>
            <TweetsDispatchContext value={dispatchTweets}>
              <UserNameProvider value={{userName, setUserName}}>
                {children}
              </UserNameProvider>
            </TweetsDispatchContext>
        </TweetsContext>
    )
}


export function useUserName()
{
  return useContext(UserNameProvider);
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
        data: {content: action.data.text, 
               userName: action.data.userName,
                date: action.data.time
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

export async function postTweet(newTweet) {
  try {
    const res = await axios.post(
      "https://uckmgdznnsnusvmyfvsb.supabase.co/rest/v1/Tweets?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVja21nZHpubnNudXN2bXlmdnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0ODU5NjAsImV4cCI6MjA3MDA2MTk2MH0.D82S0DBivlsXCCAdpTRB3YqLqTOIP7MUj-p1R8Lj9Jo",
      newTweet,
      {
        headers: {
          "Content-Type": "application/json",
          Prefer: "return=representation"
        }
      }
    );
    return res.data;
  } catch (err) {
    console.error("Error posting tweet:", err);
    throw err;
  }
}