import { useState, useEffect } from "react";
export const Age = () => {
	const [age, setAge] = useState("?");

	useEffect(() => {
		const interval = setInterval(() => {
			const time =
				(new Date().getTime() - new Date(2002, 1, 9).getTime()) /
				(1000 * 60 * 60 * 24 * 365.25);

			setAge(time.toString().slice(0, 12));
		});

		return () => {
			clearInterval(interval);
		};
	}, []);

	return <span className="font-mono">{age}</span>;
};
