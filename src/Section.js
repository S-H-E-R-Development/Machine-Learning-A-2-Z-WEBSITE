import React from 'react';

const Section = ({ title, content }) => {
    return (
        <section className="section">
            <h2 className='font-bold text-2xl'>{title}</h2>
            <div>{content}</div>
        </section>
    );
};

export default Section;
