import { FC } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Page',
	description: 'This is the about page'
};
interface IAbout {
	// Add props here
}

const About: FC<IAbout> = () => {
	return <h1>About Page</h1>;
};

export default About;
