import { createContext, useContext, useReducer, useEffect, useState } from "react";
import axios from 'axios';
const UserNameProvider = createContext("");
import { supabase } from '../data/supabase'
export function TweetsProvider({children}){
    const [userName, setUserName] = useState("");


    return(
    <UserNameProvider value={{userName, setUserName}}>
      {children}
    </UserNameProvider>
    )
}


export function useUserName()
{
  return useContext(UserNameProvider);
}

export async function postTweet(newTweet) {
  const { data, error } = await supabase.from('Tweets').insert([{ content: newTweet.content, userName: newTweet.userName, date: newTweet.date }])

  if (error) console.error(error)
}