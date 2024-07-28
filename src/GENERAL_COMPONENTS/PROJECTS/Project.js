import React from 'react';
import './Project.css';  // Import the CSS file

const Project = ({ title, repoLink, topics }) => {
    return (
        <div className="Project">
            <a href={repoLink} className="Project-title">{title}</a>
            <table className="Project-table">
                <thead>
                    <tr>
                        <th>Project</th>
                        <th>Levels</th>
                    </tr>
                </thead>
                <tbody>
                    {topics.map((topic, index) => (
                        <tr key={index} className="topic-item">
                            <td>
                                <label htmlFor={`Project-${title}-topic-${index}`} className="topic-label">
                                    <input type="checkbox" id={`Project-${title}-topic-${index}`} />
                                    <a href={`${repoLink + topic.name + '/'}`} className="topic-link">
                                        <b>{topic.name}</b>
                                    </a>
                                </label>
                            </td>
                            <td>
                                <ul className="stages-list">
                                    {topic.stages.map((stage, stageIndex) => (
                                        <li key={stageIndex} className="stage-item">
                                            <label htmlFor={`Project-${title}-topic-${index}-stage-${stageIndex}`} className="stage-label">
                                                <input type="checkbox" id={`Project-${title}-topic-${index}-stage-${stageIndex}`} />
                                                <a href={`${repoLink + topic.name + '/' + stage + '/'}`} className="stage-link">
                                                    {`Level ${stageIndex}: ${stage}`}
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

export default Project;
