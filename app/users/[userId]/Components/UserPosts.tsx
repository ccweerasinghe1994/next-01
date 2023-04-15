import { FC } from 'react';

interface IUserPosts {
	promise: Promise<IPost[]>;
}

export default async function UserPosts({ promise }: IUserPosts) {
	const userPosts = await promise;

	const content = userPosts.map((post) => {
		return (
			<article className="w-3/4 my-5" key={post.id}>
				<h2 className="text-lg text-red-500 font-bold ">🔥 {post.title}</h2>
				<p className="">{post.body}</p>
			</article>
		);
	});

	return <div>{content}</div>;
}
