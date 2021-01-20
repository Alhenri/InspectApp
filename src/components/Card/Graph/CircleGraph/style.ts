import styled from 'styled-components';

export const CircleGraphArea = styled.div`
    height: 40%;
    width: 90%;
`;

export const Content = styled.div`
    display: flex;
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
        font-size: 1rem;
        font-weight: normal;
        color: #B0B0B0;
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
        font-size: 0.9rem;
        font-weight: 300;
        color: #161616;
    }
`;

export const GraphArea = styled.div`
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const LabelStyle = styled.div`
    display: flex;
    margin: 4px 0;
    h6{
        font-weight: 300;
        font-size: 0.9rem;
        color: #161616;
        margin: 0;
    }
    img{
        width: 9px;
        margin-right: 5px;
    }
`;