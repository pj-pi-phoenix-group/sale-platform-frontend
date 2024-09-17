import styled from 'styled-components';


const ContainerMenu = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #2B3031;
    color: white;

    min-width: 17em;
    min-height: 100vh;

    position: sticky;
    top: 0px;

    @media (-webkit-device-pixel-ratio: 1.25) {
        min-height: 110vh;
    }

    @media (max-width: 1280px){
        min-width: 17em;
    }

    @media (min-height: 980px){
        height: 100vh;
    }
`

const Logo = styled.div`
    margin-left: 2.5em;
    margin-top: 2em;
    margin-bottom: 1em;
    
    & * { cursor: pointer; }
`;

const TitleCategory = styled.div`
    color: #B38755;
    margin: 2em 0em 1em 2.5em;
    font: 500 1em Roboto;
`

const Category = styled.div`
    font-size: .9em;
`

interface IMenuItem{
    isSelected: boolean;
}


const MenuItem = styled.div<IMenuItem>`
    display: flex;
    flex-direction: row;
    align-items: center;

    transition: all 1s;
    
    font: 500 1em Roboto;
    height: 3.2em;
    cursor: pointer;
    
    background-color: ${props => props.isSelected === true ? '#B38755' : '#2B3031' };
    color: ${props => props.isSelected === true ? '#fff' : '#fff' };
    border-radius: 16px;
    margin: 10px;

    & :nth-child(1) {
        margin-left: 3em;
        width: 50px;
        text-align: center;
    }

    & :nth-child(2) {
        margin-left: 1.5em;
    }

    &:hover {
        background-color: #B38755;
        color: #fff;

        & svg {
            color: #D9D9D9;
        }
    }

    & svg {
        color: ${props => props.isSelected === true ? '#D9D9D9' : '#D9D9D9' };
    }

`


export {Logo, ContainerMenu, TitleCategory, Category, MenuItem}