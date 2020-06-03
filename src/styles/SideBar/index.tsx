import React from 'react';
import { SideBarContainer } from './SideBar';

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
                        <h4>Thiago Farias</h4>
						<a href="https://github.com/githiago-f" target="_blanck">@githiago-f</a>
					</div>
					<a
						className="btn btn-outline-dark w-100"
						role="button"
						aria-expanded="false"
						aria-controls="multiCollapseExample1"
						data-toggle="collapse"
						href="#description"
					>Description</a>
					<div className="collapse multi-collapse p-2" id="description">
						<div className="card card-body">
							<p className="text-left">
                                Olá, este é meu portifólio.<br/>
                                Sou um desenvolvedor full-stack com{" "}
                                vasto conhecimento em desenvolvimento{" "}
                                web com Html, Bootstrap, CSS,{" "}
                                JavaScript e ReactJS.{" "}
                                Também em desenvolvimento de serviços back-end{" "}
                                com Express.js, Laravel, Adonis.js, entre outros.<br/>
                                Desenvolvi também aplicações mobile utilizando{" "}
                                React-Native.
							</p>
						</div>
					</div>
				</div>
			</div>
		</SideBarContainer>
	);
};
