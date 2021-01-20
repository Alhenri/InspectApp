import styled from 'styled-components';

export const HomeStyle = styled.div`
    height: 100%;
    display: flex;
    @media(max-width: 560px){
        flex-direction: column;
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FAFAFA;
    display: flex;
    left: auto;
    flex-direction: column;
    overflow: auto;
`;

export const TitleArea = styled.div`
    width: 100%;
    max-height: 70px;
    h1{
        color: #333333;
        font-weight: 500;
        font-size: 2.5rem;
        margin: 0;
        margin-top: 2vh;
        margin-left: 2vw;
    }
`;
 export const ContentArea = styled.div`
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 960px;
    margin: auto;
    height: 160%;

    // Fazendo o ajuste do tamanho do conteudo
    @media(max-width: 860px){
        height: 260%;
    }

    @media(max-width: 580px){
        height: 380%;
        width: 90%;
    }
`;