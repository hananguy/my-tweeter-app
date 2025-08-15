import './App.css'
import { TweetsProvider } from '../context/TweeterContext'
import { AddTweet } from '../components/AddTweet'
import { ListTweet } from '../components/ListTweet'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <TweetsProvider>
        <div className="TweetsContainer">
          <AddTweet/>
          <ListTweet/>
        </div>
      </TweetsProvider>
    </>
  )
}

export default App
