import React from 'react';
import { SideBarContainer } from './SideBar';
import {Subtitle} from './../Title';
import { useSideBarHooks } from './hooks';

export const SideBar = () => {
    const { profileLink, userName } = useSideBarHooks();

    return (
        <SideBarContainer>
            <div className="pt-5 p-2 text-center">
                <img
                    src={`https://github.com/${userName}.png`}
                    height="120"
                    alt="profile pic"
                    className="rounded-circle"
                />
                <div className="py-3">
                    <div className="py-3">
                        <Subtitle>Thiago Farias</Subtitle>
                        <a href={profileLink} target="_blanck">@githiago-f</a>
                    </div>

                </div>
            </div>
        </SideBarContainer>
    );
};
