import { RoundedDeleteIcon, RoundedEditIcon } from "../../assets/assets";
import Table from "../../components/table";
import { Td, Tr } from "../../components/table/styled";
import TitleAdmin from "../../components/title";
import { AdminContentBox, Text } from "./styled";

export default function Product() {
  const data = [
    {
      title: "ID",
      onClick: () => console.log("Clicked ID"),
    },
    {
      title: "Descrição",
      onClick: () => console.log("Clicked Name"),
    },
    {
      title: "Marca",
      onClick: () => console.log("Clicked Price"),
    },
    {
      title: "Preço",
      onClick: () => console.log("Clicked Price"),
    },
    {
      title: "Categoria",
      config: { width: "20%" },
      onClick: () => console.log("Clicked Quantity"),
    },
    {
      title: "Ativo",
      onClick: () => console.log("Clicked Price"),
    },
    {
      title: "",
      onClick: () => console.log("void"),
    },
    {
      title: "",
      onClick: () => console.log("void"),
    },
  ];

  const cosmeticsData = [
    {
      Id: 11,
      Descrição: "Máscara Facial Hidratante com Ácido Hialurônico",
      Marca: "Natureza Pura",
      Preço: "$24.99",
      Categoria: "Cuidado com a Pele",
      Ativo: true,
    },
    {
      Id: 12,
      Descrição: "Perfume Floral Amadeirado",
      Marca: "Aroma Elegance",
      Preço: "$39.99",
      Categoria: "Perfumes",
      Ativo: true,
    },
    {
      Id: 13,
      Descrição: "Sombra em Pó Compacta",
      Marca: "Color Glam",
      Preço: "$14.99",
      Categoria: "Maquiagem para Olhos",
      Ativo: true,
    },
    {
      Id: 14,
      Descrição: "Base Líquida Matte",
      Marca: "Cobertura Perfeita",
      Preço: "$29.99",
      Categoria: "Maquiagem",
      Ativo: true,
    },
  ];
  return (
    <AdminContentBox>
      <TitleAdmin> Produtos </TitleAdmin>
      <div className="table-container">
        <Table
          length="3em"
          size="100%"
          columns={data.map((item) => ({ title: item.title }))}
        >
          {cosmeticsData.map((item) => (
            <Tr>
              <Td>
                <Text> {item.Id} </Text>
              </Td>
              <Td>
                <Text> {item.Descrição} </Text>
              </Td>
              <Td>
                <Text> {item.Marca} </Text>
              </Td>
              <Td>
                <Text> {item.Preço} </Text>
              </Td>
              <Td>
                <Text> {item.Categoria} </Text>
              </Td>
              <Td>
                <input type="checkbox" checked={item.Ativo} disabled={true} />
              </Td>
              <Td config={{ visibility: "hidden", width: "1em" }}>
                <RoundedEditIcon
                  onClick={() => alert("Edit: " + item.Descrição)}
                />
              </Td>

              <Td config={{ visibility: "hidden", width: "1em" }}>
                <RoundedDeleteIcon
                  onClick={() => alert("Deletar: " + item.Descrição)}
                />
              </Td>
            </Tr>
          ))}
        </Table>
      </div>
    </AdminContentBox>
  );
}
