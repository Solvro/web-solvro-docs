/**
 * @typedef {Object} Social
 * @property {string} link The social media link
 */

/**
 * @typedef {Object} TeamMember
 * @property {string} id UUID
 * @property {string} name Name & surname
 * @property {Social[]} sociale Array of social links
 */

/** Fetches the team members of a given Solvro section, guaranteed to have links to their GitHub profiles by default.
 * @param {string} section The specialization name, such as "Frontend" or "Backend"
 * @param {boolean} [ensureGitHubLink=true] Whether to return only the team members that have a GitHub link. Default is `true`.
 * @returns {Promise<TeamMember[]>} The team members
 * @example const team = await getTeam("Backend");
 */
export async function getTeam(section, ensureGitHubLink = true) {
  const filter = ensureGitHubLink
    ? "&filter[sociale][link][_contains]=github"
    : "";
  try {
    const res = await fetch(
      `https://cms.solvro.pl/items/Team?fields=id,name,sociale.link&filter[specialization][Specializations_id][name][_eq]=${section}${filter}`
    );
    if (!res.ok) throw new Error("Failed to fetch team members");
    const team = await res.json();
    return team.data;
  } catch (error) {
    console.error(`Fetching section '${section}' from CMS failed:`, error);
    return [];
  }
}

// Can't use async functions in Astro components
// So we need to fetch the data outside of the component

/** Displays the team members as GitHub avatars.
 * @param {{ team: TeamMember[] }} props Component props
 * @example <TeamMembers team={await getTeam("Backend")} />
 */
export function TeamMembers({ team = [] }) {
  return team.map((user) => {
    const githubUrl = user.sociale
      .find((social) => social.link.includes("github"))
      .link.trim();
    return (
      <a href={githubUrl} title={user.name} key={user.id}>
        <img
          alt={user.name}
          src={`${githubUrl}.png?size=50`}
          width={50}
          height={50}
          style={{ display: "inline-block", margin: "5px" }}
        />
      </a>
    );
  });
}
