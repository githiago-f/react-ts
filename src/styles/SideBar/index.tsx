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
                                Hi, this is my portfolio. <br/>
                                If you are looking for an expert on React, JavaScript,
                                TypeScript, Redux, React Native...
                                I&apos;m probably not the guy.<br/>
                                But if You are looking for a good developer on those
                                &nbsp;<s>and a bit more</s>&nbsp;
                                technologies. Please, get in touch.
							</p>
						</div>
					</div>
				</div>
			</div>
		</SideBarContainer>
	);
};
