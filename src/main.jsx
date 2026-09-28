import { React, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import { BrowserRouter } from 'react-router';
import { App } from './components/App.jsx';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>
);
