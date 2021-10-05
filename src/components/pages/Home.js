import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext';

function Home() {
    //Theme
    const { theme } = useContext(ThemeContext);
    //THeme logic
    let hom = {color : "black"};

    if(theme === " light"){
        hom = {color : "black"};
    }
    
    if(theme === "dark"){
        hom = {color : "white"};

    }
    return (
        <div style={hom}>
        <h1> Home </h1>
        </div>
    )
}

export default Home
