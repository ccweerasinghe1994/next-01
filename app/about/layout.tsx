import { FC, ReactNode } from 'react';

interface IAboutLayout {
	children: ReactNode;
}

const AboutLayout: FC<IAboutLayout> = ({ children }) => {
	return (
		<>
			<nav>About Page Navigation</nav>
			<main>{children}</main>
		</>
	);
};

export default AboutLayout;
