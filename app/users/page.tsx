import { FC } from 'react';
import type { Metadata } from 'next';
import getAllUsers from '@/lib/getAllUsers';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Users Page',
	description: 'This is the users page'
};

interface IUsers {}
export default async function UsersPage() {
	const users = await getAllUsers();

	return (
		<div className="flex flex-col justify-start items-start">
			{users.map((user) => {
				return (
					<div className=" py-5" key={user.id}>
						<p>
							<Link href={`/users/${user.id}`}>👽 {user.name}</Link>
						</p>
					</div>
				);
			})}
		</div>
	);
}
