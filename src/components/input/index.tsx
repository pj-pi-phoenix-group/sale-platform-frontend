import styled from "styled-components"
export const InputAdm = styled.input`
    width: 100%;
    height: 2.5em;

    font: 400 1em Roboto;
    color: #615858;
    
    border-radius: 5px;
    border: 1px solid rgba(168, 168, 168, 1);
    outline: none;

    padding: 0em .5em;
`

export const CheckboxAdm = (props:any) => (
  <CheckboxContainer>
      <input type="checkbox" {...props} />
  </CheckboxContainer>
)


const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;

  height: 1em;
  width: 100%;

  font: 400 1em Roboto;
  
  & input[type=checkbox] {
      outline: none;
      margin: 0em;
  }
`