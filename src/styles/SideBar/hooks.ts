import { useState, useEffect } from "react";
import { getAuthor } from "service/github.api";

export const useSideBarHooks = () => {
    const [profileLink, setProfileLink] = useState('');
    const [userName, setUserName] = useState('');

    useEffect(() => {
        getAuthor().then(author => {
            setProfileLink(author.url);
            setUserName(author.name);
        });
    }, []);

    return {
        profileLink,
        userName
    }
}
