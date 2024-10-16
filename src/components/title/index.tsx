import type { ReactNode } from "react";
import { AdminYellowBar } from "../../assets/assets";
import { Container, Title } from "./styled";

export default function TitleAdmin(props:{children: ReactNode}) {
  return (
    <Container>
            <AdminYellowBar />
            <Title> {props.children} </Title>
        </Container>
  )
}