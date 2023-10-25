import React from 'react';
import ReactDOM from 'react-dom/client';


const Title = () => (
    <a href='./'>
    <img
   className = 'logo'
   src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA" 
   alt="Swiggy"  /> 
   </a>
);


const HeaderComponent = () => {
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
            <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>


    </ul>
    </div>
                  
    </div>
    )
}

const container = React.createElement("div", {id:"container"}, []);
const root =  ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeaderComponent/>);