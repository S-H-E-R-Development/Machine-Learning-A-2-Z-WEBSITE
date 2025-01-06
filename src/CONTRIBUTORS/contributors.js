import React from 'react';
import ContributorTable from './contributorTable';
import './contributors.css'

const mlContributors = [
  { name: 'Rajkumar Verma', linkedIn: 'https://www.linkedin.com/in/rajkumar-verma-353966222/', contributionIn: 'ML Intro S0-S4 | Numpy S0-S2' }

];
const esp32Contributors = [
  
];
const reactContributors = [
  { name: 'Alaka Singh', linkedIn: 'https://www.linkedin.com/in/alaka-singh-9776b9275/', contributionIn: 'UI/UX + React + Website Developer'},
  { name: 'Nimish Bhardwaj', linkedIn: 'https://www.linkedin.com/in/nimishbhardwaj93/', contributionIn: 'Overlapping issue + Shadow to navbar js/css'},
  { name: 'Zhen Liu', linkedIn: 'https://www.linkedin.com/in/zh3nl', contributionIn: 'Modification in manifest.json'},
  { name: 'Harsh Nagar', linkedIn: 'https://www.linkedin.com/in/harsh-nagar-311904256', contributionIn: 'Modification in BottomNavbar + HeaderNavBar js/css'},

];
 
const uiContributors = [];
const documentationContributors = [];
const marketingContributors = [];
const seoContributors = [];
export default function Contributors() {
    return (
      <div className='contribution_section'>
      <h1>Top 10 Contributors in Machine Learning</h1>
      <ContributorTable contributors={mlContributors} />
      <h1>Top 10 Contributors in React</h1>
      <ContributorTable contributors={reactContributors} />
      <h1>Top 10 Contributors in ESP32</h1>
      <ContributorTable contributors={esp32Contributors} />
      <h1>Top 10 Contributors in SEO (Search Engine Optimization)</h1>
      <ContributorTable contributors={seoContributors} />
      <h1>Top 10 Contributors in Figma/Canva Design(UI)</h1>
      <ContributorTable contributors={uiContributors} />
      <h1>Top 10 Contributors in Documentation</h1>
      <ContributorTable contributors={documentationContributors} />
      <h1>Top 10 Contributors in Marketing</h1>
      <ContributorTable contributors={marketingContributors} />
    </div>
  );
}
