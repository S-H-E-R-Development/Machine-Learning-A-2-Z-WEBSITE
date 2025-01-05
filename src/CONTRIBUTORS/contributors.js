import React from 'react';
import ContributorTable from './contributorTable';
import './contributors.css'

const mlContributors = [
  { name: 'Rajkumar Verma', linkedIn: 'https://www.linkedin.com/in/rajkumar-verma-353966222/', contributionIn: 'ML Intro S0-S4 | Numpy S0-S2' }

];
const esp32Contributors = [

];


const uiContributors = [];
const documentationContributors = [];
const marketingContributors = [];
const seoContributors = [];
export default function Contributors() {
  return (
    <div className='content w-full overflow-x-hidden' >
      <h1 className="text-2xl font-bold">Top 10 Contributors in Machine Learning</h1>
      <ContributorTable contributors={mlContributors} />
      <ContributorTable contributors={seoContributors} />
      <h1 className="text-2xl font-bold">Top 10 Contributors in Figma/Canva Design(UI)</h1>
      <ContributorTable contributors={uiContributors} />
      <h1 className="text-2xl font-bold">Top 10 Contributors in Documentation</h1>
      <ContributorTable contributors={documentationContributors} />
      <h1 className="text-2xl font-bold">Top 10 Contributors in Marketing</h1>
      <ContributorTable contributors={marketingContributors} />
    </div>
  );
}
