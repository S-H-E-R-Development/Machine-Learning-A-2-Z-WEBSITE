import React from 'react';
import './Module.css';  // Import the CSS file

const Module = ({ title, repoLink, topics }) => {
    return (
        <div className="module">
            <a href={repoLink} className="module-title">{title}</a>
            <table className="module-table">
                <thead>
                    <tr>
                        <th>Topic</th>
                        <th>Stages</th>
                    </tr>
                </thead>
                <tbody>
                    {topics.map((topic, index) => (
                        <tr key={index} className="topic-item">
                            <td>
                                <label htmlFor={`module-${title}-topic-${index}`} className="topic-label">
                                    <input type="checkbox" id={`module-${title}-topic-${index}`} />
                                    <a href={`${repoLink + topic.name + '/'}`} className="topic-link">
                                        <b>Topic {index + 1}: {topic.name}</b>
                                    </a>
                                </label>
                            </td>
                            <td>
                                <ul className="stages-list">
                                    {topic.stages.map((stage, stageIndex) => (
                                        <li key={stageIndex} className="stage-item">
                                            <label htmlFor={`module-${title}-topic-${index}-stage-${stageIndex}`} className="stage-label">
                                                <input type="checkbox" id={`module-${title}-topic-${index}-stage-${stageIndex}`} />
                                                <a href={`${repoLink + topic.name + '/' + stage + '/'}`} className="stage-link">
                                                    {`Stage ${stageIndex}: ${stage}`}
                                                </a>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Module;
