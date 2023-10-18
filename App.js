import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement("h1", {
    id:"title",
    // style:"Animation",
    // className:"class",
}, ("Hello Guy's 1"));

const heading2 = React.createElement("h2", {
    id:"title",
    
}, ("Hello Guy's 2"));
const container = React.createElement("div", {id:"container"}, [heading1, heading2]);
const root =  ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside te root
root.render(container);