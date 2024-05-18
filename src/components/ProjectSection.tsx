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
        console.error("Failed to fetch pinned repos: ", error);
        return [];
    });

function NoRepo() {
    return (
        <div className="col-span-full row-span-full flex flex-col place-content-center text-center">
            <p>
                OOps can't get project info! If you see this,{" "}
                <a href="mailto:johnbakhmat@gmail.com/?subject=Yo, your site project api broke">
                    contact me
                </a>{" "}
                ASAP!
            </p>
            <h1>&#x1F615;</h1>
        </div>
    );
}

const HasRepos = (repos) =>
    pinnedRepos.map((repo) => <Project repo={repo} key={repo.name} />);

export default function ProjectSection() {
    return (
        <section className="w-full grid grid-cols-1 gap-4 auto-cols-max sm:grid-cols-2 sm:gap-3 place-items-center">
            {pinnedRepos.length > 0 ? HasRepos(pinnedRepos) : NoRepo()}
        </section>
    );
}
