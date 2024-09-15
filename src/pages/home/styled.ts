

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;

    min-width: 1260px;

    @media (-webkit-device-pixel-ratio: 1.25) {
        & * {
            zoom: 1.00 !important;
        }
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    align-items: center;
    background-color: #F5F5F5;
`

const PageContent = styled.div`
    padding: 0em 2em;
    width: 100%;
    min-height: calc(100vh - 5.5em);
`


export { Container, Content, PageContent }