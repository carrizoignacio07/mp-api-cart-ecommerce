import { React, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
