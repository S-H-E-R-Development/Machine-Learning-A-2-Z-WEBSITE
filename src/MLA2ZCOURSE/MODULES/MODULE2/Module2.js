import React from 'react';
import Module from '../../../GENERAL_COMPONENTS/MODULES/Module';  // Adjust the path as necessary

const MLA2ZModule2 = () => {
    return (
        <section style={{
            marginTop: '100px'
        }}>

            <Module
                title="Module 2: NumPy"
                repoLink="/MLA2ZCourse/Modules/Module2/"
                topics={[
                    {
                        name: "Introduction to NumPy", stages: [
                            "Understanding the basics of NumPy",
                            "Creating and manipulating arrays",
                            "Performing mathematical operations with NumPy",
                            "Advanced NumPy techniques and broadcasting",
                            "Interview Questions"
                        ]
                    }
                ]}
            />
        </section >
    );
};

export default MLA2ZModule2;
