import React from 'react';
import ReactDOM from 'react-dom';
import { initMiddleware } from "devise-axios";
import './css/main.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./providers/AuthProvider";

initMiddleware();

ReactDOM.render(
    <AuthProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthProvider>,
document.getElementById('root'));
