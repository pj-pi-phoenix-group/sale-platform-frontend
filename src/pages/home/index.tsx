import { Routes, Route, useNavigate } from "react-router-dom";

import { Container, Content, PageContent } from "./styled";

import Menu from "../../components/menu";
import Header from "../../components/header";


export default function Admin() {

  return (
      <Container>
          <Menu />
          <Content>
            <Header  />
            <PageContent>
              <Routes>

              </Routes>
            </PageContent>
          </Content>
      </Container>
  );
}
