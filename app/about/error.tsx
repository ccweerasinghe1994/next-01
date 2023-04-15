'use client'; // Error components must be Client components

import { FC, useEffect } from 'react';

interface IError {
	error: Error;
	reset: () => void;
}

const Error: FC<IError> = ({ error, reset }) => {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="flex flex-col items-center justify-center mt-20">
			<h2 className="text-red-500 text-5xl mb-5">Something went wrong!</h2>
			<button
				className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Try again
			</button>
		</div>
	);
};

export default Error;
