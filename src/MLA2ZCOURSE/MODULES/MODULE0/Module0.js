import React from 'react';
import Module from '../../../GENERAL_COMPONENTS/MODULES/Module';  // Adjust the path as necessary

const MLA2ZModule0 = () => {
    return (
        <section style={{
            marginTop: '100px'
        }}>

            <Module
                title="Module 0: History and Future of Machine Learning"
                repoLink="/MLA2ZCourse/Modules/Module0/"
                topics={[
                    {
                        name: "History of Machine Learning",
                        stages: [
                            "Introduction to the evolution of machine learning.",
                            "Key milestones in the development of machine learning algorithms.",
                            "Significant breakthroughs and their impact on the field.",
                            "The current state and future trends in machine learning technology."
                        ]
                    },
                    {
                        name: "Future of Machine Learning",
                        stages: [
                            "Emerging trends and technologies in machine learning.",
                            "Predictions for future advancements in ML algorithms and applications.",
                            "Potential impacts on industries and daily life.",
                            "Ethical considerations and challenges ahead."
                        ]
                    }
                ]}
            />
        </section >
    );
};

export default MLA2ZModule0;
