import React from 'react';
import Module from '../GENERAL_COMPONENTS/MODULES/Module';
import { HeaderESP32 } from '../Header';
import Project from '../GENERAL_COMPONENTS/PROJECTS/Project';
import './ESP32CourseOutLine.js'

const ESP32CourseOutLine = () => {
    return (
        <div className="course-outline">
            <HeaderESP32 />
            <Module
                title="Module 0: History and Future of Internet of Things"
                repoLink="/ESP32/Modules/Module0/"
                topics={[
                    {
                        name: "History and Future of IoT",
                        stages: [
                            "Introduction to IoT",
                            "Historical development of IoT",
                            "Current trends and future of IoT",
                            "Impact of IoT on various industries"
                        ]
                    },
                ]}
            />
            <Module
                title="Module 1: Overview of ESP32 IOT"
                repoLink="/ESP32/Modules/Module1/"
                topics={[
                    {
                        name: "Introduction to ESP32",
                        stages: [
                            "Overview of ESP32 hardware and capabilities",
                            "Setting up the development environment",
                            "Writing your first program"
                        ]
                    },

                ]}
            />
            <Module
                title="GPIO and Digital I/O"
                repoLink="/ESP32/Modules/Module2/"
                topics={[
                    {
                        name: "GPIO and Digital I/O",
                        stages: [
                            "Introduction to GPIO and Digital I/O",
                            "Controlling LEDs with GPIO",
                            "Reading input from buttons",
                            "Implementing debouncing techniques"
                        ]
                    },

                ]}
            />
            <Module
                title="Module 3: Analog I/O"
                repoLink="/ESP32/Modules/Module3/"
                topics={[
                    {
                        name: "Analog I/O",
                        stages: [
                            "Introduction to Analog I/O",
                            "Using ADC to read analog sensors",
                            "Generating PWM signals",
                            "Controlling brightness of an LED"
                        ]
                    },

                ]}
            />
            <Module
                title="Module 4: Timers and Interrupts"
                repoLink="/ESP32/Modules/Module4/"
                topics={[
                    {
                        name: "Timers and Interrupts",
                        stages: [
                            "Introduction to Timers and Interrupts",
                            "Setting up timers",
                            "Using hardware interrupts",
                            "Creating precise delays"
                        ]
                    },

                ]}
            />
            <Module
                title="Module 5: Communication Protocols"
                repoLink="/ESP32/Modules/Module5/"
                topics={[
                    {
                        name: "Communication Protocols",
                        stages: [
                            "Introduction to Communication Protocols",
                            "UART communication",
                            "I2C communication with sensors",
                            "SPI communication with displays"
                        ]
                    },

                ]}
            />
            <Module
                title="Module 6: Networking"
                repoLink="/ESP32/Modules/Module6/"
                topics={[
                    {
                        name: "Networking",
                        stages: [
                            "Introduction to Networking",
                            "Connecting to WiFi",
                            "Sending HTTP requests",
                            "Creating a simple web server"
                        ]
                    },

                ]}
            />

            <Project
                title="Project"
                repoLink="/ESP32/Projects/Project1/"
                topics={[

                    {
                        name: "Weather Station",
                        stages: [
                            "Overview",
                            "Reading temperature and humidity data",
                            "Displaying data on an LCD screen",
                            "Sending data to a cloud server"
                        ]
                    }
                ]}
            />

        </div>
    );
};

export default ESP32CourseOutLine;
