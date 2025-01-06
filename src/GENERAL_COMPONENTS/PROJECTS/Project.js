import React from 'react';
import './Project.css';  // Import the CSS file

const Project = ({ title, repoLink, topics }) => {
    return (
        <div className="Project">
            <a href={repoLink} className="Project-title max-md:!text-xl">{title}</a>
            <div className='border'>
                {topics.map((topic, index) => (
                    <div key={index} className="flex max-md:flex-col">
                        <div className="topic-section h-full w-full">
                            <div className='bg-[#f2f2f2] pl-3 border-y'>Project</div>
                            <label htmlFor={`Project-${title}-topic-${index}`} className="topic-label pl-3">
                                <input type="checkbox" id={`Project-${title}-topic-${index}`} />
                                <a href={`${repoLink + topic.name + '/'}`} className="topic-link">
                                    <b>{topic.name}</b>
                                </a>
                            </label>
                        </div>
                        <div className="level-section h-full w-full border-l">
                            <div className='bg-[#f2f2f2] pl-3 border-y'>Levels</div>
                            <ul className="stages-list">
                                {topic.stages.map((stage, stageIndex) => (
                                    <li key={stageIndex} className="stage-item">
                                        <label htmlFor={`Project-${title}-topic-${index}-stage-${stageIndex}`} className="stage-label pl-3">
                                            <input type="checkbox" id={`Project-${title}-topic-${index}-stage-${stageIndex}`} />
                                            <a href={`${repoLink + topic.name + '/' + stage + '/'}`} className="stage-link">
                                                {`Level ${stageIndex}: ${stage}`}
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

export default Project;