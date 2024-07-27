import React from 'react';

const Module = ({ title, repoLink, topics }) => {
    return (
        <div className="module">
            <a href={repoLink} className="module-title">{title}</a>
            <ul>
                {topics.map((topic, index) => (
                    <li key={index}>
                        <input type="checkbox" id={`module-${title}-topic-${index}`} />
                        <label htmlFor={`module-${title}-topic-${index}`}>
                            <a href={`#topic-${index}`}>{topic.name}</a>
                            <ul>
                                {topic.stages.map((stage, stageIndex) => (
                                    <li key={stageIndex}>
                                        <input type="checkbox" id={`module-${title}-topic-${index}-stage-${stageIndex}`} />
                                        <label htmlFor={`module-${title}-topic-${index}-stage-${stageIndex}`}>
                                            {`Stage ${stageIndex}: ${stage}`}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Module;
