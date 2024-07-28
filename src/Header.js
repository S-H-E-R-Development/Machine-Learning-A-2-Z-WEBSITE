import React from 'react';
import './Header.css'; // Import the CSS file for styling

const HeaderMLA2Z = () => {
    return (
        <header className="header">
            <h1 className="header-title">Machine Learning A-2-Z Course</h1>
            <p className="header-description">
                Welcome to the comprehensive machine learning course designed for aspiring data scientists and AI practitioners.
                This course is structured to guide you through foundational concepts to advanced applications in machine learning.
            </p>
        </header>
    );
};

const HeaderESP32 = () => {
    return (
        <header className="header">
            <h1 className="header-title">Overview of ESP32 IOT</h1>
            <p className="header-description">
                Welcome to the comprehensive ESP32 IoT course designed for aspiring IoT developers and embedded systems enthusiasts.
                This course covers everything from the basics of ESP32 to advanced IoT applications.
            </p>
        </header>
    );
};

export { HeaderMLA2Z, HeaderESP32 };
