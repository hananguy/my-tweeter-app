import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css"; 
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
   <MantineProvider defaultColorScheme="dark">
    <BrowserRouter basename="/my-tweeter-app">
        <StrictMode>
        <App />
      </StrictMode>,
    </BrowserRouter>
   </MantineProvider>
  
)
