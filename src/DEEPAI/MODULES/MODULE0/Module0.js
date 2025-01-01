import React from 'react';
import Module from '../../../GENERAL_COMPONENTS/MODULES/Module';  // Adjust the path as necessary

const DeepAIModule0 = () => {
    return (
        <section style={{
            marginTop: '100px'
        }}>

            <Module
                title="Module 0: DeepAI"
                repoLink="/DeepAI/Modules/Module0/"
                topics={[
                    {
                        name: "DeepAI Nodes",
                        stages: [
                            "Introduction",
                            "How nodes are connected",
                            "Goal"
                        ]
                    },
                ]}
            />
        </section >
    );
};

export default DeepAIModule0;
