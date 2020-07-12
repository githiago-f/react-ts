import { TCardGit } from "types/cards";

export const getRepos = async (): Promise<TCardGit[]> => {
    const url = "https://api.github.com/users/githiago-f/repos?visibility=public"
    const res = await fetch(url);
    const data = await res.json();
    return data.filter((i: TCardGit) => i.language !== null);
}

export const loadReadme = async () => {
    const url = "https://raw.githubusercontent.com/githiago-f/githiago-f/master/README.md"
    const res = await fetch(url);
    const data = await res.text();
    return data;
}
