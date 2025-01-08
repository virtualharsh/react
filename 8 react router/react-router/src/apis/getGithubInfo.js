const getGithubInfo = async ({ params }) => {
    const { id } = params; // Use params to get the username from the route
    const response = await fetch(`https://api.github.com/users/${id}`);
    if (!response.ok) {
        throw new Response("User not found", { status: 404 });
    }
    return response.json(); // Return the fetched data
};

export default getGithubInfo;