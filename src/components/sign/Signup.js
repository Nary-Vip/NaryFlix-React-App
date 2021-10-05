import React, { useContext } from 'react';
import "./sign_style.css";
import { ThemeContext } from '../../Context/ThemeContext';

const Signup = () => {
    //Theme
    const { theme } = useContext(ThemeContext);
    //Theme logic
    let font_col = {color : "white"};

    if(theme === "light"){
        font_col = {color : "black"};
    }
    if(theme === "dark"){
        font_col = {color : "white"};
    }
    var user = [];
    var users = [];

    const user_details = (name, phone_no, email, password) => {
        this.name = name;
        this.phone_no = phone_no;
        this.email = email;
        this.password = password;
    }

    const Signup_valid = () => {
        var name =
            document.forms["Signup_form"]["Name"];
        var email =
            document.forms["Signup_form"]["Email"];
        var phone =
            document.forms["Signup_form"]["Contact_no"];
        var password =
            document.forms["Signup_form"]["pwd"];

        if (name.value === "") {
            name.focus();
            return false;
        }

        if (email.value === "") {
            email.focus();
            return false;
        }

        // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email) {
            email.focus();
            return false;
        }

        if (phone.value === "") {
            phone.focus();
            return false;
        }

        if (phone.value.length < 10) {
            phone.focus();
            return false;
        }

        if (password.value === "") {
            password.focus();
            return false;
        }

        user.push(new user_details(name.value, phone.value, email.value, password.value));

        if (localStorage.getItem("user_details") === null) {
            localStorage.setItem("user_details", JSON.stringify(user));
        }
        else {
            users = JSON.parse(localStorage.getItem("user_details") || "[]");
            users = users.concat(user);
            localStorage.setItem("user_details", JSON.stringify(users));
        }
    }

    const Signin_valid = () => {
        var user_name =
            document.forms["Signin_form"]["user_name"];
        var password =
            document.forms["Signin_form"]["pwd"];

        if (user_name.value === "") {
            window.alert("Please enter a email id.");
            user_name.focus();
            return false;
        }
        if (password.value === "") {
            window.alert("Please enter your password.");
            password.focus();
            return false;
        }

        users = JSON.parse(localStorage.getItem("user_details") || "[]");
        if (users.length >= 1) {
            for (var i = 0; i < users.length; i++) {
                if (users[i]["email"] === user_name.value) {
                    if (users[i]["password"] === password.value) {
                        window.alert("Login successful.");
                        return true;
                    }
                    else {
                        window.alert("Password is incorrect.");
                        password.focus();
                        return false;
                    }
                }
                else {
                    window.alert("User doesn't exist.Please Sign up..");
                    window.location.reload();
                    user_name.focus();
                    return false;
                }
            }
        }
        else {
            window.alert("User doesn't exist.Please Sign up..");
            window.location.reload();
            user_name.focus();
            return false;
        }
    }
    return (
        <div className="container">
            <div className="singpage">
                <div className="box">
                    <h1 className="box-title">
                        <h3 className="header" style = {font_col}>SIGN UP</h3>
                    </h1>
                    <form name="Signup_form">

                        <br />
                        <label style = {font_col}>Name:</label><input type="text" name="Name" placeholder="Name" style={{ padding: "10px 10px; width:180px" }} />

                        <br /><br /><br />
                        <label style = {font_col}>E-mail:</label><input type="text" name="Email" placeholder="example@gmail.com" style={{ padding: "10px 10px; width : 180px" }} />

                        <br /><br /><br />
                        <label style = {font_col}>Password:</label><input type="password" name="pwd" placeholder="Enter password" style={{ padding: "10px 10px; width:180px" }} />

                        <br /><br /><br />
                        <label style = {font_col}>Contact no:</label><input type="text" name="Contact_no" placeholder="Phone number" style={{ padding: "10px 10px; width:180px" }} />

                        <br /><br /><br /><br />
                        <center>
                            <a href="sign_in.html" className="but" onclick={Signup_valid}>
                                Sign up
                            </a>

                            <br /><br />
                            <div style = {font_col}>
                                Already have an account?
                                <a href="sign_in.html">
                                    <font>Sign In</font>
                                </a>
                            </div>
                        </center>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Signup


