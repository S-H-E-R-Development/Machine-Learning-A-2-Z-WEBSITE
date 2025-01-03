import React from 'react';
import './Module.css';  // Import the CSS file

const Module = ({ title, repoLink, topics }) => {
    const generateTopicLink = (topicIndex) => `${repoLink}Topic${topicIndex + 1}/Stage0`;
    const generateStageLink = (topicIndex, stageIndex) => `${repoLink}Topic${topicIndex + 1}/Stage${stageIndex}/`;
    return (
        <div className="module">
            <a href={repoLink} className="module-title">{title}</a>
            <div className="module-table flex border">
                {topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="topic-item max-md:flex-col">
                        {/* Topic Section */}
                        <div className="topic-section h-full block w-full">
                            <div className="bg-[#f2f2f2] pl-3 border-y">Topic</div>
                            <label htmlFor={`module-${title}-topic-${topicIndex}`} className="topic-label pl-3 block">
                                <input type="checkbox" id={`module-${title}-topic-${topicIndex}`} />
                                <a href={generateTopicLink(topicIndex)} className="topic-link">
                                    <b>Topic {topicIndex + 1}: {topic.name}</b>
                                </a>
                            </label>
                        </div>

                        {/* Stage Section */}
                        <div className="stage-section border-l w-full">
                            <div className="bg-[#f2f2f2] pl-3 border-y">Stages</div>
                            <ul className="stages-list">
                                {topic.stages.map((stage, stageIndex) => (
                                    <li key={stageIndex} className="stage-item">
                                        <label htmlFor={`module-${title}-topic-${topicIndex}-stage-${stageIndex}`} className="stage-label pl-3">
                                            <input
                                                type="checkbox"
                                                id={`module-${title}-topic-${topicIndex}-stage-${stageIndex}`}
                                            />
                                            <a href={generateStageLink(topicIndex, stageIndex)} className="stage-link">
                                                {`Stage ${stageIndex}: ${stage}`}
                                            </a>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Module;
