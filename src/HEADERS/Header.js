import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure you have created this CSS file

const navBarButtonData = [
    { "linkTo": "/", "label": "Home" },
    // { "linkTo": "/courses", "label": "Courses" },
    { "linkTo": "/ESP32", "label": "ESP32" },
    // { "linkTo": "/coaches", "label": "Coaches" },
    // { "linkTo": "/community", "label": "Community" },
    { "linkTo": "/contributors", "label": "Contributors" },
    // { "linkTo": "/auth", "label": "Register/login" },
    // { "linkTo": "/auth/dashboard", "label": "Dashboard" },
];

const Navbar = () => {
    const showSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    };

    const hideSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    };

    return (
        <nav className="navbar">
            <ul className="sidebar">
                <li onClick={hideSidebar} className="sidebarLink">
                    <Link to=""><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" /></svg></Link>
                </li>
                {navBarButtonData.map((value, index) => (
                    <li key={index}>
                        <Link to={value.linkTo} onClick={hideSidebar}>{value.label}</Link>
                    </li>
                ))}
            </ul>

            <ul className="nav-links">
                <li>
                    <Link to="https://github.com/Machine-Learning-A-2-Z/00---Basics-of-ML">
                    
                    <img src = {require("./logo192.png")} alt="MLa2z" className="circular-icon" />
                    </Link>
                </li>
                {navBarButtonData.map((value, index) => (
                    <li key={index}>
                        <Link to={value.linkTo} className="hideOnMobile">{value.label}</Link>
                    </li>
                ))}
                <li onClick={showSidebar} className="menu-button">
                    <Link className='menu' to=""><svg color='white' xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" /></svg></Link>
                </li>
            </ul>

        </nav>
    );
};

export default Navbar;
