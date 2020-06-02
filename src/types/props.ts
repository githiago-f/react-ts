import { PropsWithChildren as Props } from 'react';

export type Base<PropTypes = {}> = Props<PropTypes> & PropTypes
