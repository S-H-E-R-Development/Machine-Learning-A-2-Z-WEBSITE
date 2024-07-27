import React from 'react';

const Project = ({ title, repoLink, stages }) => {
    return (
        <div className="project">
            <a href={repoLink} className="project-title">{title}</a>
            <ul>
                {stages.map((stage, index) => (
                    <li key={index}>
                        <input type="checkbox" id={`project-${title}-stage-${index}`} />
                        <label htmlFor={`project-${title}-stage-${index}`}>
                            {`Stage ${index}: ${stage}`}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Project;
