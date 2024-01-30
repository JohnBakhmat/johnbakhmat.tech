import type { Repo } from "../repo";
import { Project } from "./Project.tsx";

type Response = {
	Name: string;
	Description: string;
	Url: string;
	Stars: number;
	Forks: number;
	Languages: string[];
}[];

const pinnedRepos = await fetch("https://pinned.fly.dev/projects/johnbakhmat")
	.then((r) => r.json())
	.then((json) => json as Response)
	.then((r) =>
		r.map(
			(i) =>
				({
					name: i.Name,
					description: i.Description,
					url: i.Url,
					stars: i.Stars,
					forks: i.Forks,
					languages: i.Languages,
				}) as Repo,
		),
	)
	.catch((error) => {
		console.debug("ERR", error);
		return [];
	});

export default function ProjectSection() {
	return (
		<section className="w-full grid grid-cols-1 gap-4 auto-cols-max sm:grid-cols-2 sm:gap-3 place-items-center">
			{pinnedRepos.length > 0 ? (
				pinnedRepos.map((repo) => {
					return <Project repo={repo} key={repo.name} />;
				})
			) : (
				<div className="col-span-full row-span-full flex flex-col place-content-center text-center">
					<p>
						OOps can't get project info! If you see this,{" "}
						<a href="mailto:johnbakhmat@gmail.com/?subject=Yo, your site project api broke">
							contact me
						</a>{" "}
						ASAP!
					</p>
					<h1>☹</h1>
				</div>
			)}
		</section>
	);
}
