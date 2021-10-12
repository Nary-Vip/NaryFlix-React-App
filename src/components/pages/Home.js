import React, { useContext } from 'react'
import { Context } from '../../Context/Context';
import cover from "./bg-3.png";
import "./home_style.css"

function Home() {
    //Theme
    const { theme } = useContext(Context);
    //THeme logic
    let hom = { color: "black" };

    if (theme === " light") {
        hom = { color: "black" };
    }

    if (theme === "dark") {
        hom = { color: "white" };

    }
    return (
        <div style={hom}>
            <div class="box">
                <img src={cover} className="image" style={{"align":"left"}} />
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <font style={{"face":'Segoe UI', "size":"40"}}>
                        Welcome To Nary Flix
                    </font>

                    <font face="Arial" size="3">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Enjoy exclusive shows and series only available in Nary Flix

                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        along with 1000+ movies and TV shows.
                    </font>
                </p>

                <text style={{"float": "right"}}>
                    <a href="" style={{"text-decoration": "none"}}>
                        <button type="button" class="btn_2">Subscribe Now!</button>
                    </a>
                </text>

                <center>
                    <a href="sign_in.html" style={{"text-decoration": "none"}}>
                        <button type="button" class="btn_2">Go to Login page</button>
                    </a>
                </center>
            </div>
        </div>
    )
}

export default Home
