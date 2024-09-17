import Table from "../../components/table";

export default function Product() {
  const data = [
    {
      title: 'ID',
      config: { width: '10%' },
      onClick: () => console.log('Clicked ID'),
      value: '1',
    },
    {
      title: 'Name',
      config: { width: '30%' },
      onClick: () => console.log('Clicked Name'),
      value: 'Product 1',
    },
    {
      title: 'Price',
      config: { width: '20%' },
      onClick: () => console.log('Clicked Price'),
      value: '10.99',
    },
    {
      title: 'Quantity',
      config: { width: '20%' },
      onClick: () => console.log('Clicked Quantity'),
      value: '100',
    },
  ]
  return (
    // <Table
    //   columns={Array.from(
    // />
    <>
    </>
  )
}