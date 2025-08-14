import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TweetsProvider } from '../context/TweeterContext'
import { AddTweet } from '../components/AddTweet'
import { ListTweet } from '../components/ListTweet'

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
