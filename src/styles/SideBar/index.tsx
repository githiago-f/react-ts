import React from 'react';
import { SideBarContainer, Description } from './SideBar';
import {Subtitle} from './../Title';

export const SideBar = () => {
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
                            Olá, este é meu portifólio.<br/>
                            Sou um desenvolvedor full-stack com{' '}
                            vasto conhecimento em desenvolvimento{' '}
                            web com Html, Bootstrap, CSS,{' '}
                            JavaScript e ReactJS.{' '}
                            Também em desenvolvimento de serviços back-end{' '}
                            com Express.js, Laravel, Adonis.js, entre outros.<br/>
                            Desenvolvi também aplicações mobile utilizando{' '}
                            React-Native.
						</p>
					</Description>
				</div>
			</div>
		</SideBarContainer>
	);
};
