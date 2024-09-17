import { TableAdmin, Thead, Tbody, Td, Roboto } from "./styled";

interface ITable {
  columns: {title: string}[];
  rows: Array<{
    title: string
    config: {
      width?: string;
      visibility?: 'visible' | 'hidden';
    };
    onClick: () => void;
    value: string;
  }[]>;
  size: number;
  length: number;
  autoGenerate?: boolean;
  children?: JSX.Element;
}
export default function Table(props:ITable) {
  

  return (
    <TableAdmin size={props.size}>
      <Thead length={props.length}>
        <tr>
          {props.columns.map((x, idxRow) => 
            <th key={idxRow}> 
              <Roboto>
                {x.title}
              </Roboto>
            </th>
          )}
        </tr>
      </Thead>

      <Tbody>
        {!props.autoGenerate && props.children}

        {props.autoGenerate == true && 
          props.rows.map((row, idxRow) => 
            <tr key={idxRow}>
              {row.map((cell, ic) => 
                <Td
                  key={ic + '.' + idxRow}
                  config={cell.config}
                  onClick={() => cell.onClick ? cell.onClick() : null}
                >
                  <Roboto> {cell.value}</Roboto>
                </Td>
              
              )}
            </tr>
          )
        }
      </Tbody>
    </TableAdmin>
  )
}