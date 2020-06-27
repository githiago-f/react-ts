import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import assets from 'assets';
import { Base } from 'types/props';
import { TCard } from 'types/cards';
import { ThemeProps } from 'types/theme';
import { Subtitle } from 'styles/Title';

const Card = styled.div<ThemeProps>`
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 5px;
    background-color: ${props => props.theme.darkThemeOn ? '#343a40' : props.theme.theme.bg.light};
`;

const CardBody = styled.div`
    padding: 10px;
`;

const Badge = styled.span.attrs({
	className: 'badge badge-pill'
})<ThemeProps & {lang: string}>`
    background-color: ${props => props.theme.colors[props.lang]};
    font-size: 50%;
`;

const CardImage = styled.img`
    border-radius: 4px;
    max-height: 267px;
    max-width: 400;
`;

const Button = styled.a.attrs({
	className: 'btn btn-dark',
	target: '_blank'
})`
    float: right;
`;

export const CardProject: FC<Base<TCard>> = (props) => {
	const [file, setFile] = useState(assets['default']);

	useEffect(()=> {
		const keys = Object.keys(assets);
		if(keys) {
			if(keys.find(i => i === props.title) !== undefined) {
				setFile(assets[props.title]);
			}
		}
	}, [props.title]);

	return (
		<Card>
			<CardImage height="267" width="400" src={file} alt={props.title + ' - ' + props.lang}/>
			<CardBody>
				<Subtitle>{props.title}</Subtitle>
				<p style={{maxWidth: 380 }}>
					{props.description}
				</p>
				<span>
					<Badge lang={props.lang}>&nbsp;</Badge>
                    &nbsp;{props.lang}
				</span>
				<Button href={props.href}> Ver projeto </Button>
			</CardBody>
		</Card>
	);
};
