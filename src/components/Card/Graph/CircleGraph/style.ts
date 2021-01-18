import styled from 'styled-components';

export const CircleGraphArea = styled.div`
    margin-top: 2vh;
    height: 15vh;
    width: 90%;
`;

export const Content = styled.div`
    display: flex;
    margin-top: 5px;
    width: 100%;
    justify-content: space-between;
`;

export const ContentLabel = styled.div`
    margin-right: 5px;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const ContentInfo = styled.div`
    height: 100%;
    margin-left: 5px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h6{
        margin: 0;
    }
`;

export const TableStyle = styled.div`
    width: 100%;
    tr{
        display: flex;
        justify-content: space-between;
    }
    td{
        font-size: 10px;
        font-weight: 500;
    }
`;

export const GraphArea = styled.div`
    margin-top: 2vh;
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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