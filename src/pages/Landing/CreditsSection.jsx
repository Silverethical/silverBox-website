// react imports
import { useEffect, useState } from "react";

// import teamMembers array
import silverBoxTeamMembers from "../../data/TeamMembers";

/**
 * Retrieves information about a GitHub user from the GitHub API.
 * @async
 * @param {string} username - The GitHub username to retrieve information for.
 * @returns {Promise<object|boolean>} - A promise that resolves to an object containing the user information if successful, or false if unsuccessful.
 */
async function getSilverBoxTeamMembersInfo(username) {
	try {
		// Make a request to the GitHub API to retrieve information about the user.
		const response = await fetch(`//api.github.com/users/${username}`);

		// Check if the response was successful, throwing an error if not.
		if (!response.ok) throw new Error(response.statusText);

		// Parse the response body as JSON and return it.
		const data = await response.json();
		return data;
	} catch (error) {
		// Log the error to the console and return false.
		console.error(`Request failed: ${error}`);
		return false;
	}
}

const CreditsSection = () => {
	const [teamMembers, setTeamMembers] = useState([]);

	useEffect(() => {
		// Fetch team members' information
		(async () => {
			const updatedTeamMembers = [];
			for (const user of silverBoxTeamMembers) {
				// Destructure user properties
				const { githubUsername, position, showName } = user;
	
				// Get additional info using GitHub username
				const { login, avatar_url, name } = await getSilverBoxTeamMembersInfo(githubUsername);
	
				// Create new user info object
				const newUserInfo = {
					githubUsername,
					position,
					showName,
					login,
					avatar_url,
					name,
				};
	
				// Add user info to the updatedTeamMembers array if login exists
				if (login) {
					updatedTeamMembers.push(newUserInfo);
				}
			}
			// Update the state with the updated team members' information
			setTeamMembers(updatedTeamMembers);
		})();
	}, []);

	return (
		<section
			id="silverBox-CreditsSection"
			className={`${teamMembers.length > 0 ? "" : "hidden"}`}
		>
			<div className="container">
				<h2 className="silverBox-sectionHeader">Credits</h2>

				{/* <!-- team members --> */}
				<div className="silverBox-teamMembers">
					{teamMembers.map((members, idx) => (
						<a
							rel="noreferrer"
							target="_blank"
							className="silverBox-teamMember"
							href={`//github.com/${members.githubUsername}`}
							key={idx}
						>
							{members.avatar_url ? (
								<img
									className="silverBox-memberImage"
									src={members.avatar_url}
								/>
							) : (
								""
							)}
							<div className="silverBox-memberInfo">
								<p className="silverBox-memberName">
									{members.showName
										? members.name
										: members.githubUsername}
								</p>
								<p className="silverBox-memberPosition">
									{members.position}
								</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default CreditsSection;
