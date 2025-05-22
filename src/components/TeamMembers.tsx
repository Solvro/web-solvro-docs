interface Social {
  link: string;
}

interface TeamMember {
  id: string;
  name: string;
  sociale: Social[];
  photo: string; // Added photo based on usage in getTeam fetch
}

const CMS_ADDRESS = "https://cms.solvro.pl";

/** Fetches the team members of a given Solvro section, guaranteed to have links to their GitHub profiles by default.
 * @param {string} section The specialization name, such as "Frontend" or "Backend"
 * @param {boolean} [ensureGitHubLink=true] Whether to return only the team members that have a GitHub link. Default is `true`.
 * @example const team = await getTeam("Backend");
 */
export async function getTeam(
  section: string,
  ensureGitHubLink: boolean = true
): Promise<TeamMember[]> {
  const filter = ensureGitHubLink
    ? "&filter[sociale][link][_contains]=github"
    : "";
  try {
    const res = await fetch(
      `${CMS_ADDRESS}/items/Team?fields=id,name,sociale.link,photo&filter[specialization][Specializations_id][name][_eq]=${encodeURIComponent(section)}${filter}`
    );
    if (!res.ok) throw new Error("Failed to fetch team members");
    const team: { data: TeamMember[] } = await res.json();
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
interface TeamMembersProps {
  team?: TeamMember[];
}

export function TeamMembers({ team = [] }: TeamMembersProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {team.map((user) => {
        const githubSocial = user.sociale.find((social) =>
          social.link.includes("github")
        );
        // Ensure githubSocial is found before trying to access its link property
        if (!githubSocial) {
          // Optionally, you could log an error or return a placeholder
          console.warn(
            `User ${user.name} (ID: ${user.id}) has no GitHub link.`
          );
          return null; // Or some fallback UI
        }
        const githubUrl = githubSocial.link.trim();
        return (
          <a
            href={githubUrl}
            title={user.name}
            target="_blank"
            rel="noopener noreferrer"
            key={user.id}
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 ease-in-out no-underline"
          >
            <img
              alt={user.name}
              src={`${CMS_ADDRESS}/assets/${user.photo}?key=member`}
              width={80}
              height={80}
              className="rounded-full border-2 border-accent-200 dark:border-accent-700 shadow-lg"
            />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {user.name}
            </span>
          </a>
        );
      })}
    </div>
  );
}
