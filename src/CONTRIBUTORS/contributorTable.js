import React from 'react';

const ContributorTable = ({ contributors }) => {
  return (
    <table className="contributors-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>LinkedIn</th>
          <th>Contribution In</th>
        </tr>
      </thead>
      <tbody>
        {contributors.map((contributor, index) => (
          <tr key={index}>
            <td>{contributor.name}</td>
            <td>
              <a href={contributor.linkedIn} target="_blank" rel="noopener noreferrer">
                {contributor.linkedIn}
              </a>
            </td>
            <td>{contributor.contributionIn}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContributorTable;
