import styled from 'styled-components';

export const ContentGraph = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const GraphArea = styled.div`
    margin-top: 3vh;
    height: 15vh;
    width: 90%;
`;

export const ContentLabel = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
`;

export const LabelStyle = styled.div`
    display: flex;
    margin: 4px 0;
    h6{
        margin: 0;
    }
    img{
        width: 9px;
        margin-right: 5px;
    }
`;