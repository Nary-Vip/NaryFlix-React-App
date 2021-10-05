import React, { useState, useContext } from 'react';
import * as ImIcons from "react-icons/im";
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SideBarData } from './SideBarData';
import { IconContext } from 'react-icons';
import { ThemeContext } from '../../Context/ThemeContext';

const Navbarr = () => {
    //Theme
    const {theme , settheme } = useContext(ThemeContext);
    //Theme-Logic
    let nav_bkg = "light";
    let nav_var = "light";
    let nav_icons = {color: "black"};
    let nav_sid = {background: "rgba(233, 241, 255, 0.9)"};
    let nav_sid_txt = {color:"black"};

    if(theme === "light"){
        nav_bkg = theme;
        nav_var = theme;
        nav_icons = {color: "black"};
        nav_sid = {background: "rgba(233, 241, 255, 0.9)"};
        nav_sid_txt = {color:"black"};
    }
    if(theme === "dark"){
        nav_bkg = theme;
        nav_var = theme;
        nav_icons = {color: "red"};
        nav_sid = {background: "linear-gradient(147deg, #000000 0%, #2c3e50 74%)"};
        nav_sid_txt = {color:"white"};
    }


    const [sidebar, setsidebar] = useState(false);
    const showSideBar = () => {
        setsidebar(!sidebar);
    }

    const themeSwitch2Light= ()=>{
        settheme("light");
    }

    const themeSwitch2Dark= ()=>{
            settheme("dark");
    }

    
    return (
        <div className="nav-container">
            <IconContext.Provider value={nav_icons}>
                <Navbar bg={nav_bkg} variant = {nav_var}  expand="lg" fixed="top">
                <Container >
                        <div className="navbar">
                            <div className="menu-bars">
                                <ImIcons.ImMenu onClick={showSideBar} />
                            </div>
                        </div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/"><AiIcons.AiFillHome/> Home</Nav.Link>
                            <Nav.Link href="https://www.github.com/Nary-Vip" target="block">Source</Nav.Link>

                            <NavDropdown title="THEME" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={themeSwitch2Light}>Light</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={themeSwitch2Dark}>Dark</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-center">
                            <Navbar.Brand as={Link} to="/">NaryFlix</Navbar.Brand>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                                <Nav.Link as = { Link } to="/signup">Sign UP</Nav.Link>
                                <Nav.Link href="#link">Sign IN</Nav.Link>
                        </Navbar.Collapse>
                        
                    </Container>
                </Navbar>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={nav_sid}>
                    <ul className="nav-menu-items" onClick={showSideBar} style={nav_sid}>
                        <div style={{margin: "130px 0 0 0"}}></div>
                        {SideBarData.map((item, index) => {
                            return (
                            <>
                                <div className="container">
                                    <li key={index} className={item.className}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span className="itemTitle" style={nav_sid_txt}>{item.title}</span>
                                        </Link>
                                    </li>
                                </div>
                            </>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>

        </div>
    );
}

export default Navbarr