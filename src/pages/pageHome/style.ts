import styled from 'styled-components';

export const HomeStyle = styled.div`
    height: 100%;
    display: flex;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FAFAFA;
    display: flex;
    left: auto;
    flex-direction: column;
`;

export const TitleArea = styled.div`
    width: 100%;
    height: 10%;
    max-height: 70px;
    h1{
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

    @media(max-width: 580px){
        width: 90%;
    }
`;