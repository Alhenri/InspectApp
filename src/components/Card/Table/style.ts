import styled from 'styled-components';

export const ContentTable = styled.div`
    overflow: auto;
    width: 90%;
    margin-top: 2%;
    height: 65%;
`;

export const TableStyle = styled.table`
    width: 100%;
    tr.Index{
        th{
            font-size: 0.6rem;
            font-weight:bold;
        }
        th.Name{
            text-align: left
        }
    }
    tr.Data{
        td{
            font-weight: 500;
            font-size: 1.2rem;
            text-align: center;
            border-bottom: 0.5px solid #EBEBEB;
        }
        td.Name{
            text-align: left;
        }
    }
`