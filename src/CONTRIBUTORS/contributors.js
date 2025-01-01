import React from 'react';
import ContributorTable from './contributorTable';
import './contributors.css'

const mlContributors = [
  { name: 'Rajkumar Verma', linkedIn: 'https://www.linkedin.com/in/rajkumar-verma-353966222/', contributionIn: 'Numpy | Pandas' }

];
const esp32Contributors = [
  
];
const reactContributors = [
  { name: 'Alaka Singh', linkedIn: 'https://www.linkedin.com/in/alaka-singh-9776b9275/', contributionIn: 'MLA2Z website' }
];
 
export default function Contributors() {
  return (
    <div >
      
      <h1>Top 10 Contributors in Machine Learning</h1>
      <ContributorTable contributors={mlContributors} />
      <h1>Top 10 Contributors in ESP32</h1>
      <ContributorTable contributors={esp32Contributors} />
      <h1>Top 10 Contributors in React</h1>
      <ContributorTable contributors={reactContributors} />
    </div>
  );
}
