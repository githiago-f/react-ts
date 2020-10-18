import { useEffect, useState } from "react";
import { TCard } from "types/cards";
import { getRepos, loadReadme } from "service/github.api";

export const useHomeHooks = () => {
    const [cards, setCards] = useState([] as TCard[]);
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        getRepos().then(data => {
            const myCards = data.map(card => ({
                lang: card.language.toLowerCase().trim(),
                description: card.description,
                title: card.name,
                href: card.html_url
            })
            ) as TCard[];
            setCards(myCards);
        });

        loadReadme().then(setMarkdown);
    }, []);

    return {
        cards,
        markdown
    }
}
