import React, { FC } from 'react';
import styled from 'styled-components';
import assets from 'assets';
import { Base } from 'types/props';
import { TCard } from 'types/cards';
import { ThemeProps } from 'types/theme';

const Card = styled.div`
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 5px;
    background-color: #fff;
`;

const CardBody = styled.div`
    padding: 10px;
`;

const Badge = styled.span.attrs({
    className: "badge badge-pill"
})<ThemeProps & {lang: string;}>`
    background-color: ${props => props.theme.colors[props.lang]};
    font-size: 50%;
`;

const CardImage = styled.img.attrs({
    className: 'img-fluid'
})`
    border-radius: 4px;
`;

export const CardProject: FC<Base<TCard>> = (props) => {
	return (
		<Card>
            <CardImage src={assets["default"]}/>
            <CardBody>
                <span>
                    <b>{props.title}</b><br/>
                    {props.description}
                </span><br/>
                <span>
                    <Badge lang={props.lang}>&nbsp;</Badge>
                    &nbsp;{props.lang}
                </span>
            </CardBody>
        </Card>
	);
};
