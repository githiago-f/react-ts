import styled from 'styled-components';

export const Content = styled.div.attrs({
    className: 'bg-darker'
})`
    padding-top: 3rem;
    min-height: 100vh;
    @media only screen and (min-width: 1180px) {
        max-height: 100vh;
    }
    @media only screen and (max-width: 1180px) {
        width: 100%;
    }
    padding-bottom: 3rem;
    position: relative;
    overflow: auto;
    width: 70vw;
`;
