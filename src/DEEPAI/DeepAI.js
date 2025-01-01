import React from 'react';
import Module from '../GENERAL_COMPONENTS/MODULES/Module.js';
import { HeaderDeepAI } from '../Header.js';
import './DeepAI.js'

const DeepAIResearch = () => {
    return (
        <div className="course-outline">
            <HeaderDeepAI />
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
            <Module
                title="Module 1: Node Connections"
                repoLink="/DeepAI/Modules/Module1/"
                topics={[
                    {
                        name: "Deep connections of nodes - without activation functions",
                        stages: [
                            "One node to another node",
                            "One node to double node",
                            "Double node to one node"
                        ]
                    },
                    {
                        name: "Deep connections of nodes - activation functions",
                        stages: [
                            "One node to another node",
                            "One node to double node",
                            "Double node to one node"
                        ]
                    },

                ]}

            />
            <Module
                title="Module 2: Generating Equation from trained model"
                repoLink="/DeepAI/Modules/Module1/"
                topics={[
                    {
                        name: "Without activation functions",
                        stages: [
                            "One node to another node",
                            "One node to double node",
                            "Double node to one node"
                        ]
                    },
                    {
                        name: "Activation functions",
                        stages: [
                            "One node to another node",
                            "One node to double node",
                            "Double node to one node"
                        ]
                    },

                ]}

            />



        </div>
    );
};

export default DeepAIResearch;
