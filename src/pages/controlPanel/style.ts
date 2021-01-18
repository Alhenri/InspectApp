import styled from 'styled-components';

export const ControlPanelStyle = styled.div`
    height: 100%;
    width: 100%;
    min-width: 840px;
    display: flex;
    @media(max-width: 860px){
        flex-direction: column;
        min-width: 336px;
        max-width: 500px;
    }
`;

export const ContainerLeft = styled.div`
    height: 95%;
    flex: 2;
    margin-right: 10px;
    @media(max-width: 860px){
        flex-grow: 1;
    }
    @media(max-width: 580px){
        flex-grow: 1;
    }
    
`;

export const ContainerRight = styled(ContainerLeft)`
    flex: 1;
    margin-right: 5px;
`; 

// Area do grafico de barras
export const BarGraphArea = styled.div`
    display: flex;
    align-items: center;
    height: 33%;
    @media(max-width: 580px){
        height: 25%;
    }
`;

// Area do grafico de circulo
export const CirGraphArea = styled(BarGraphArea)`
    display: flex;
    
    div.Card:first-child{
        margin-right: 5px;
    }
    div.Card:last-child{
        margin-left: 5px;
    }

    @media(max-width: 580px){
        flex-direction: column;
        height: 50%;
        div.Card:first-child{
            margin-right: 0px;
            width: 100%;
        }
        div.Card:last-child{
            margin-left: 0px;
            width: 100%;
            margin-top: 10px;
        }
    }
`;

// Area da lista esquerda
export const LeftListArea = styled(BarGraphArea)`
   
`;

// Area do grafico de circulo direita
export const RightCirGraphArea = styled.div`
    display: flex;
    align-items: center;
    height: 33%;
`;

// Area da lista direita
export const RightListArea = styled(RightCirGraphArea)`
    height: 66%;
`;