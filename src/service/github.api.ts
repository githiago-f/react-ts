import { TCardGit } from "types/cards";

export const getRepos = async (): Promise<TCardGit[]> => {
    const url = "https://api.github.com/users/githiago-f/repos?visibility=public"
    const res = await fetch(url);
    const data = await res.json();
    return data;
}
