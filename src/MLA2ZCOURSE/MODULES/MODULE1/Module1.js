import React from 'react';
import Module from '../../../GENERAL_COMPONENTS/MODULES/Module';  // Adjust the path as necessary

const MLA2ZModule1 = () => {
    return (
        <section style={{
            marginTop: '100px'
        }}>

            <Module
                title="Module 1: Introduction to Machine Learning"
                repoLink="/MLA2ZCourse/Modules/Module1/"
                topics={[
                    {
                        name: "What is Machine Learning?", stages: [
                            "Introduction to ML concepts",
                            "Simple linear regression",
                            "Multivariate linear regression",
                            "Industrial Applications of Linear Regression"
                        ]
                    }
                ]}
            />
        </section >
    );
};

export default MLA2ZModule1;
