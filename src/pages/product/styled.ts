import styled from "styled-components";

const AdminContentBox = styled.div`
    display: flex;
    flex-direction: column;
    
    position: relative;
    
    background-color: #FFFFFF;
    color: #3C3939;

    width: 100%;
    margin: 2em 0em;

    padding: 0em 1.5em;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
`

const Text = styled.div`
font: 1em Roboto;
text-align: left;
margin-right: 10px;
`

const Label = styled.div`
   display:flex;
   flex-direction:column;
   justify-content:space-evenly;
   font: 1em Roboto;
   width: 150px;
   text-align: right;
   margin-right: 10px;
`





export {AdminContentBox, Text, Label}