import styled from "styled-components";

const Thead = styled.thead<{length: string}>`
  th {
        padding-left: 10px;
        text-align: left;
        background-color: #3E4243;
    }

    th:nth-child(1) {
        padding-left: 30px;
    }

    tr {
        height: ${props => props.length};
        color: #FFFFFF;
    }
`

const Tbody = styled.tbody`
    tr:hover {
        td * {
            visibility: visible;
        }
    }

    tr td:nth-child(1) {
        padding-left: 30px;
    }

    tr td:nth-last-child(1) {
        padding-right: 30px;
    }
`

const Tr = styled.tr`
    
`

const TableAdmin = styled.table<{ size: string }>`
  width: ${(props) => props.size};

  border-left: 1px solid #e2e2e2;
  border-right: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  border-collapse: collapse;

  color: #6d6868;

  tr:nth-child(odd) {
    background-color: #f5f5f5;
  }

  tr:nth-child(even) {
    background-color: #ffffff;
  }
`;

export interface ITd {
  config?: {
    width?: string;
    visibility?: 'visible' | 'hidden';
  };
}


const Td = styled.td<ITd>`
    padding-left: 10px;
    height: 3.5em;

    width: ${props => props.config && props.config.width ? props.config.width : 'inherit'};

    & :nth-child(1) {
        visibility: ${props => props.config && props.config.visibility ? props.config.visibility : 'visible'};
    }
       
`


const Roboto = styled.div`
    font: 1em Roboto;
`  

export { TableAdmin, Thead, Tbody, Tr, Td, Roboto};
