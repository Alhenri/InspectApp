import styled from 'styled-components';

export const HomeStyle = styled.div`
    height: 100vh;
    display: flex;
`;

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    background-color: coral;
    display: flex;
    left: auto;
    flex-direction: column;
`;

export const TitleArea = styled.div`
    width: 100%;
    flex: 1;
    h1{
        margin: 0;
        margin-top: 2vh;
        margin-left: 2vw;
    }
`;
 export const ContentArea = styled.div`
    flex: 9;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: beige;
`;