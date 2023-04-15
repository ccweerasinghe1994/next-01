const getAllUsers = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	if (!res.ok) throw new Error('Error fetching users');
	const users = await res.json();
	return users as IUser[];
};

export default getAllUsers;
