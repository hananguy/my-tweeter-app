import './App.css'
import {useState, use} from 'react'
import { TweetsProvider } from '../context/TweeterContext'
import { AddTweet } from '../components/AddTweet'
import { ListTweet } from '../components/ListTweet'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router";
import  Home from '../pages/Home'
import Profile from '../pages/Profile'
import {AppLayout} from './layouts/AppLayout';
import {LoginPage} from '../pages/LoginPage'
import { ProtectedRoute } from '../auth/ProtectedRoute';
import {AuthProvider} from '../auth/AuthProvider'

function App() {


  
  return (
  <AuthProvider>
   <TweetsProvider> 
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<LoginPage/>} />
            <Route path="profile" element={<Profile />} />
            <Route path="home" element={<Home/>} />
          </Route>
        </Routes>
    </TweetsProvider>
  </AuthProvider>
  )
}

export default App
