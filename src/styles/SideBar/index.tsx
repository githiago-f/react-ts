import React, {useEffect, useState} from 'react';
import { SideBarContainer, Description } from './SideBar';
import {Subtitle} from './../Title';
import { loadReadme } from 'service/github.api';
import ReactMarkdown from 'react-markdown';

export const SideBar = () => {
    const [readme, setReadme] = useState('')

    useEffect(()=> {
        loadReadme().then(setReadme).catch(console.error)
    }, [])

	return (
		<SideBarContainer>
			<div className="pt-5 p-2">
				<img
					src="https://github.com/githiago-f.png"
					height="120"
					alt="profile pic"
					className="rounded-circle"
				/>
				<div className="py-3">
					<div className="py-3">
						<Subtitle>Thiago Farias</Subtitle>
						<a href="https://github.com/githiago-f" target="_blanck">@githiago-f</a>
					</div>
					<Description>
						<p className="text-left">
                            <ReactMarkdown source={readme}/>
						</p>
					</Description>
				</div>
			</div>
		</SideBarContainer>
	);
};
