import getUser from '@/lib/getUser';
import getUserPosts from '@/lib/getUserPosts';
import { Suspense } from 'react';
import UserPosts from './Components/UserPosts';
import type { Metadata } from 'next';

type IGetUser = {
	params: {
		userId: string;
	};
};

export async function generateMetadata({
	params: { userId }
}: IGetUser): Promise<Metadata> {
	// we will not call the getUserPosts function two times
	const user = await getUser(userId);
	return {
		title: user.name,
		description: `This is the page os ${user.name}}`
	};
}

export default async function UserPage({ params: { userId } }: IGetUser) {
	const user = await getUser(userId);
	const userPostsData = getUserPosts(userId);

	// const [user, userPosts] = await Promise.all([userData, userPostsData]);

	return (
		<div className=" mt-5">
			<h2 className="text-2xl text-blue-500 border-b-2 border-blue-500 pb-1">
				{user.name}
			</h2>
			<Suspense fallback={<h2>Loading ...</h2>}>
				{/* @ts-expect-error Server Component */}
				<UserPosts promise={userPostsData} />
			</Suspense>
		</div>
	);
}
