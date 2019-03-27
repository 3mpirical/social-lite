import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./providers/AuthProvider";

ReactDOM.render(
    <AuthProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthProvider>,
document.getElementById('root'));
