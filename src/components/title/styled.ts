
import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: .5em 0em 1em 1em;
    margin: 1.5em;

    & :nth-child(1) {
        margin: 0px 15px 0px 0px;
    }

`

export const Title = styled.div`
    font: 700 1.2em Roboto;

    & span {
        font: 400 1em Roboto;
    }
`