import './App.css'
import { TweetsProvider } from '../context/TweeterContext'
import { AddTweet } from '../components/AddTweet'
import { ListTweet } from '../components/ListTweet'
import { BrowserRouter, Routes, Route } from "react-router";
import  Home from '../pages/Home'
import Profile from '../pages/Profile'
// import Navbar from '../components/Navbar'
import {AppLayout} from './layouts/AppLayout';
function App() {


  return (
    // <>
    //   <TweetsProvider>
    //     <div className="TweetsContainer">
    //       <AddTweet/>
    //       <ListTweet/>
    //     </div>
    //   </TweetsProvider>
    // </>
   <TweetsProvider>
      <BrowserRouter basename="/my-tweeter-app">
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TweetsProvider>
  )
}

export default App
