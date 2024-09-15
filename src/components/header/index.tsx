import { Avatar, Container, Icon, Profile, PtLeft, PtRight } from "./styled";
import AvatarIcon from "../../assets/avatar.png";
import NotifyIcon from "../../assets/notifyIcon.svg";
export default function Header() {
  return (
    <Container>
      <PtLeft> 
        <span> Welcome back, </span>
        <span> Eduardo </span>
      </PtLeft>
      <PtRight> 
        <Icon src={NotifyIcon} />
        <span></span>
        <Profile>
          <Avatar src={AvatarIcon}/> 
          <div className="info-perfil">
            <h1 className="name"> Eduuardo M</h1>
            <p className="desc"> Análise e Desenvolvimento de Sistemas</p>
          </div>
        </Profile>
      </PtRight>
    </Container>
  )
}