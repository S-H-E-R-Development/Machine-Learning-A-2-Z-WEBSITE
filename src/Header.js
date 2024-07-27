import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title"> Machine Learning A-2-Z Course</h1>
            <p className="header-description">
                Welcome to the comprehensive machine learning course designed for aspiring data scientists and AI practitioners.
                This course is structured to guide you through foundational concepts to advanced applications in machine learning.
            </p>
        </header>
    );
};

export default Header;
