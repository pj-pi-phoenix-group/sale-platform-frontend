import { Routes, Route, useNavigate } from "react-router-dom";

import { Container, Content, PageContent } from "./styled";

import Menu from "../../components/menu";
import Header from "../../components/header";
import Product from "../product";
import Share from "../share";
import Stock from "../stock";
import Users from "../users";


export default function Admin() {

  return (
      <Container>
          <Menu />
          <Content>
            <Header  />
            <PageContent>
              <Routes>
                <Route path="/product" element={<Product />} />
                <Route path="/share" element={<Share />} />
                <Route path="/stock" element={<Stock />} />
                <Route path="/users" element={<Users />} />
              </Routes>
            </PageContent>
          </Content>
      </Container>
  );
}
