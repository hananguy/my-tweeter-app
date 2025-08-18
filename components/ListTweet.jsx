// import { useTweetsContext } from '../context/TweeterContext';
import { supabase } from '../data/supabase'
import { TweetItem } from './TweetItem';
import './ListTweet.css'
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

export function ListTweet() {
    const [tweets, setTweets] = useState([]);
    const [loading, setLoading] = useState(true);
    const firstLoad = useRef(true);

      useEffect(() =>{
        const GetData = async function()
        {
            try
            {
                if (firstLoad.current) setLoading(true);
                const { data, error } = await supabase.from('Tweets').select('*');
                if(error) 
                {
                  
                }
                else{
                      setTweets(prevState => isEqual(prevState, data) ? prevState : data);
                 if (firstLoad.current) {
                   setLoading(false);
                   firstLoad.current = false;
                    }
                }
                
            }
            catch{
            }
            finally{
                setLoading(false)
            }
            
        }

        const interval = setInterval(() => {
            GetData();
            }, 10)
            
        return () => clearInterval(interval)
    }, [])

         return(
            <div className="TweetsContainer">
                {loading && <p>Loading tweets...</p>}
                {!loading && [...tweets].sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((tweet, index) => <TweetItem key={index} userName={tweet.userName} content={tweet.content} date={tweet.date}/>)}
            </div>
    )

}


function isEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    const x = a[i], y = b[i];
    if (x.id !== y.id || x.content !== y.content || x.userName !== y.userName || x.date !== y.date) {
      return false;
    }
  }
  return true;
}