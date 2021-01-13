import styled from 'styled-components';

export const ContainerLeft = styled.div`
    height: 95%;
    background-color: blueviolet;
    flex: 2;
    margin-left: 5px;

    display: flex;
    flex-direction: column;
`;

export const ContainerRight = styled(ContainerLeft)`
    flex: 1;
    background-color: blue;
    margin-right: 5px;
`; 

// Area do grafico de barras
export const BarGraphArea = styled.div`
    flex: 1;
`;

// Area do grafico de circulo
export const CirGraphArea = styled(BarGraphArea)`

`;

// Area da lista esquerda
export const LeftListArea = styled(BarGraphArea)`

`;

// Area do grafico de circulo direita
export const RightCirGraphArea = styled.div`
    flex: 1;
`;

// Area da lista direita
export const RightListArea = styled.div`
    flex: 2;
`;