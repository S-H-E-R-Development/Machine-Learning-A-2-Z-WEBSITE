import React from 'react';
import './Discussion.css';

const Discussion = ({ query, answer, ansImages, queryImages }) => {
    return (
        <div className="chat">
            {(query || (queryImages && queryImages.length > 0)) && (
                <div className="chat-bubble user-message">
                    <span className="user">Me:</span>
                    <div dangerouslySetInnerHTML={{ __html: query }}></div>
                    <div className="images">
                        {queryImages && queryImages.map((image, index) => (
                            <img key={index} src={image} alt={`query-img-${index}`} />
                        ))}
                    </div>
                </div>
            )}

            {(answer || (ansImages && ansImages.length > 0)) && (
                <div className="chat-bubble response-message">
                    <span className="response">You:</span>
                    <div dangerouslySetInnerHTML={{ __html: answer }}></div>
                    <div className="images">
                        {ansImages && ansImages.map((image, index) => (
                            <img key={index} src={image} alt={`ans-img-${index}`} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Discussion;
