import { TCardGit } from 'types/cards';

export const getAuthor = async () => {
    const pack = await import('./../../package.json');
    return pack.author
}

export const getRepos = async (): Promise<TCardGit[]> => {
    const userName = await getAuthor();
    const url = `https://api.github.com/users/${userName.name}/repos?visibility=public`;
    const res = await fetch(url);
    const data = await res.json();
    return data.filter((i: TCardGit) => i.language !== null);
};

export const loadReadme = async () => {
    const userName = await getAuthor();
    const url = `https://raw.githubusercontent.com/${userName.name}/githiago-f/master/README.md`;
    const res = await fetch(url);
    const data = await res.text();
    return data;
};
