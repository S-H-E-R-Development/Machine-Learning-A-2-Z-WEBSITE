import React from 'react';

const ContributorTable = ({ contributors }) => {
	return (
		<div className="overflow-x-auto">
			<table className="min-w-full border-collapse border border-gray-300">
				<thead>
					<tr className="bg-gray-200">
						<th className="px-5 py-1 border border-gray-300 text-left">Name</th>
						<th className="px-5 py-1 border border-gray-300 text-left">LinkedIn</th>
						<th className="px-5 py-1 border border-gray-300 text-left">Contribution In</th>
					</tr>
				</thead>
				<tbody>
					{contributors.map((contributor, index) => (
						<tr
							key={index}
							className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
						>
							<td className="px-5 py-1 border border-gray-300">{contributor.name}</td>
							<td className="px-5 py-1 border border-gray-300">
								<a
									href={contributor.linkedIn}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-500 hover:underline"
								>
									{contributor.linkedIn}
								</a>
							</td>
							<td className="px-5 py-1 border border-gray-300">{contributor.contributionIn}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ContributorTable;