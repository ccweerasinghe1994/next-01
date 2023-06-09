import Link from 'next/link';
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Aladin } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav className="flex gap-10 text-2xl px-5 my-5 text-blue-400 border-b-2 border-blue-400 pb-2">
					<Link href={'/'}>Home</Link>
					<Link href={'/about'}>About</Link>
					<Link href={'/users'}>Users</Link>
				</nav>
				<div className="border-2 border-blue-200 max-w-ful px-10 md:w-3/4 mx-auto ">
					{children}
				</div>
			</body>
		</html>
	);
}
