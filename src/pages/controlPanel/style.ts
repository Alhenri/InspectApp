import styled from 'styled-components';

export const ControlPanelStyle = styled.div`
    height: 100%;
    width: 90%;/// antes com 100%
    min-width: 740px;
    max-width: 960px;
    display: flex;
    @media(max-width: 860px){
        flex-direction: column;
        min-width: 480px;
        max-width: 500px;
    }
    @media(max-width: 580px){
        min-width: 0;
    }
`;

export const ContainerLeft = styled.div`
    height: 95%;
    flex-grow: 2;
    margin-right: 10px;
    @media(max-width: 860px){
       height: 50%;
    }
    @media(max-width: 580px){
        height: 55%;
        margin-right: 0px;
    }
    
`;

export const ContainerRight = styled(ContainerLeft)`
    flex-grow: 2; ////
    margin-right: 5px;
    @media(max-width: 580px){
        height: 35%;
        margin-right: 0px;
    }
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