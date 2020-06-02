import styled from 'styled-components'

export const Content = styled.div.attrs({
    className: "col-12 col-sm-12 col-md-9 col-lg-9 bg-light"
})`
    padding-top: 3rem;
    min-height: 100vh;
    padding-bottom: 3rem;
    max-height: 100vh;
    position: relative;
    overflow: auto;
`;
