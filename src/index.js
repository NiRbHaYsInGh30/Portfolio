import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app/App';
import { Analytics } from "@vercel/analytics/react";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
    
);
