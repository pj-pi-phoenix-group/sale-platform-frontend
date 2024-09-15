import styled from "styled-components";

const Container = styled.div`
  font-family: Roboto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  min-height: 10vh;
  padding: 1em 1em;
  border-bottom: solid 1.5px #6C757D;
`
const PtLeft = styled.div`
width: 50%;
font: 500 2em roboto;
  :nth-child(2) {
    color: #B38755 ;
  }
`;
const PtRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  & span {
    border-right: 2px solid #6C757D;
    font-size: 1.2em;
    margin: 0 20px;
    height: 70px;
  }
`;

const Icon = styled.img`
  background-color: #B38755;
  width: 50px;
  padding: 10px;
  height: auto;
  border-radius: 50%;
`

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  .info-perfil {
    display: flex;
    flex-direction: column;
    margin-left: 14px;
    .name {
    font: 500 18px Roboto;
    line-height: 2px;
  }

    .desc {
      flex-wrap: nowrap;
      font-size: 12px;
      line-height: 2px;
      color: #6C757D;
    }
  }
 
`

const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`
export { Container, Profile, Icon, PtLeft, PtRight, Avatar }