import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import ThresholdProvider from './context/ThresholdContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThresholdProvider>
        <App />
    </ThresholdProvider>
  </StrictMode>,
)
