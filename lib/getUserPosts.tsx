export default async function getUserPosts(userId: string) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?user-id=${userId}`
	);
	if (!res.ok) throw new Error('Error fetching Posts');
	const user = await res.json();
	return user as IPost[];
}
