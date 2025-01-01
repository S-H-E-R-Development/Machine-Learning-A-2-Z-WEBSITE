import React, { useState, useEffect } from 'react';
import './Stage_0.css';

const DeepAIModule_0_Topic_1_Stage_0_content = () => {
    const [fileContent, setFileContent] = useState('');

    useEffect(() => {
        // Fetch the raw content of the Jupyter notebook file
        fetch('/DeepAI_Research_Module_0_Topic_1_Stage_0.ipynb')
            .then((response) => response.text())
            .then((data) => setFileContent(data))
            .catch((error) => console.error('Error loading file:', error));
    }, []);

    return (
        <div className="content-container">
            <h1>Stage 1: Introduction</h1>
            <div style={{ width: '100%', height: '100vh' }}>
                <iframe
                    src="https://nbviewer.org/github/Machine-Learning-A-2-Z/DeepAI-Research/blob/main/DeepAI_Research_Module_0_Topic_1_Stage_0.ipynb"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    title="GitHub Notebook Viewer"
                />
            </div>
        </div>
    );
};

export default DeepAIModule_0_Topic_1_Stage_0_content;
