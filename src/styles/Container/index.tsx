import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 1180px) {
        flex-direction: column;
    }
`;
