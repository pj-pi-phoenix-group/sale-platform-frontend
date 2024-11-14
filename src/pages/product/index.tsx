import { useEffect, useState } from "react";
import axios from "axios";
import { RoundedDeleteIcon, RoundedEditIcon } from "../../assets/assets";
import Table from "../../components/table";
import { Td, Tr } from "../../components/table/styled";
import TitleAdmin from "../../components/title";
import { AdminContentBox, Text } from "./styled";
import Loaders from "../../components/loaders";

export default function vProduct() {
  const [dataResponse, setDataResponse] = useState<any[]>([]);
 
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
  ];

  useEffect(() => {
    axios.get("http://localhost:8080/v1/product")
      .then((response: any) => {
        setDataResponse(response.data);
        console.log(response.data);
      })
      .catch((error: any) => console.error("Error fetching data:", error));
  }, []);

  const handleDelete = (id: number, description: string) => {
    if (window.confirm(`Tem certeza que deseja deletar o produto: ${description}?`)) {
      axios.delete(`http://localhost:8080/v1/product/${id}`)
        .then(() => {
          setDataResponse(dataResponse.filter(item => item.productId !== id));
          alert("Produto deletado com sucesso!");
        })
        .catch((error: any) => console.error("Error deleting product:", error));
    }
  };

  const handleUpdateList = () => {
    axios.get("http://localhost:8080/v1/product")
      .then((response: any) => {
        setDataResponse(response.data);
        console.log(response.data);
      })
      .catch((error: any) => console.error("Error fetching data:", error));
  };

  return (
    <AdminContentBox>

      <div className="box-title" style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <TitleAdmin> Produtos <span style={{ fontStyle: "normal" }}> - Gerenciar produtos </span></TitleAdmin>
        <div className="reload">
          <img
          className="reload-icon"
            onClick={() => handleUpdateList()}
            src="/src/assets/reload.svg" style={{ width: "30px" }} alt="reload" />
        </div>
      </div>

      <div className="table-container">
        <Table
          length="3em"
          size="100%"
          columns={data.map((item) => ({ title: item.title }))}
        >
          {dataResponse.length > 0 ? (
            dataResponse.map((item: any) => (
              <Tr key={item.productId}>
                <Td>
                  <Text> {item.productId} </Text>
                </Td>
                <Td>
                  <Text> {item.description} </Text>
                </Td>
                <Td>
                  <Text> {item.brand} </Text>
                </Td>
                <Td>
                  <Text> {item.price} </Text>
                </Td>
                <Td>
                  <Text> {item.category} </Text>
                </Td>

                <Td>
                  <input type="checkbox" checked={item.status == "ACTIVE"} disabled={true} />
                </Td>
                <Td config={{ visibility: "hidden", width: "1em" }}>
                  <RoundedDeleteIcon
                    onClick={() => handleDelete(item.productId, item.description)}
                  />
                </Td>
              </Tr>
            ))
          ) : (
            <Loaders />
          )}
        </Table>
      </div>
    </AdminContentBox>
  );
}
