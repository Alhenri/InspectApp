import styled from 'styled-components';

export const ContainerLeft = styled.div`
    height: 95%;
    flex: 2;
    margin-right: 10px;

    display: flex;
    flex-direction: column;
`;

export const ContainerRight = styled(ContainerLeft)`
    flex: 1;
    margin-right: 5px;
`; 

// Area do grafico de barras
export const BarGraphArea = styled.div`
    flex: 1;
`;

// Area do grafico de circulo
export const CirGraphArea = styled(BarGraphArea)`
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    
    div.Card:first-child{
        margin-right: 5px;
    }
    div.Card:last-child{
        margin-left: 5px;
    }
`;

// Area da lista esquerda
export const LeftListArea = styled(BarGraphArea)`
   
`;

// Area do grafico de circulo direita
export const RightCirGraphArea = styled.div`
    flex: 1;
    margin-bottom: 7px;
`;

// Area da lista direita
export const RightListArea = styled.div`
    flex: 2;
    margin-top: 3px;
`;