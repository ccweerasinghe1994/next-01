import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Home Page',
	description: 'This is the home page'
};

export default function Home() {
	return (
		<main>
			<h1>Home Page</h1>
		</main>
	);
}
