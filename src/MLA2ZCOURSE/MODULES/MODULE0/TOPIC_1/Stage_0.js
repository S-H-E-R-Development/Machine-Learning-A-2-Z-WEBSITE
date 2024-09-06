import React from 'react';
import Discussion from '../../../../GENERAL_COMPONENTS/DISCUSSION/Discussion';
import './Stage_0.css';

const MLA2ZModule_0_Topic_1_Stage_0_Content = () => {
    const discussionData = [
        {
            query: "What is Machine Learning?",
            answer: "Machine learning, a subfield of artificial intelligence, focuses on the development of algorithms and statistical models that enable computers to perform tasks without explicit instructions. Its evolution can be traced back to the mid-20th century, with significant contributions from various disciplines including mathematics, statistics, and <b> computer science. </b>",
            ansImages: [],

            queryImages: [],
        },
        {
            query: "Can you explain the early milestones in machine learning?",
            answer: `The early milestones include: <ul>
                        <li><strong>1950s:</strong> The development of the first learning algorithms and the introduction of the concept of neural networks.</li>
                        <li><strong>1960s-1970s:</strong> The emergence of symbolic AI and the creation of expert systems.</li>
                        <li><strong>1980s:</strong> The resurgence of neural networks with backpropagation and the rise of connectionism.</li>
                        <li><strong>1990s:</strong> The growth of machine learning research and the advent of support vector machines and ensemble methods.</li>
                        <li><strong>2000s:</strong> The explosion of data and the rise of big data analytics, leading to significant advancements in machine learning algorithms.</li>
                        <li><strong>2010s:</strong> The breakthrough of deep learning, revolutionizing fields such as computer vision, natural language processing, and speech recognition.</li>
                    </ul>`,
            ansImages: [],
            queryImages: [],
        },
        {
            query: "How has machine learning evolved in the 21st century?",
            answer: "As we move into the future, machine learning continues to evolve, driven by advancements in computational power, the availability of large datasets, and the development of more sophisticated algorithms.",
            ansImages: [],
            queryImages: [],
        },
        {
            query: "Why is it important to understand the history of machine learning?",
            answer: "Understanding the history and evolution of machine learning provides a foundation for appreciating its current state and anticipating future trends. This knowledge is essential for anyone looking to explore the field of machine learning and its applications.",
            ansImages: [],
            queryImages: [],
        }
    ];

    return (
        <div className="content-container">
            {discussionData.map((item, index) => (
                <Discussion key={index} query={item.query} answer={item.answer} ansImages={item.ansImages} queryImages={item.queryImages} />
            ))}
        </div>
    );
};

export default MLA2ZModule_0_Topic_1_Stage_0_Content;
