import styled from 'styled-components'

export const SelectStyle = styled.select`
    width: 90%;
    margin-top: 1.3rem;
    margin-bottom: 1.3rem;
    background: #C4C4C4;
    border-radius: 100px;
`;

export const ListContent = styled.div`
    margin-top: 1rem;
    width: 100%;
    overflow: auto;
    max-height: 75%;

    h5, h6{
        font-size: 1.2rem;
        margin: 0;
    }
    h5{
        color: #333333;
    }
    h6{
        color: #B0B0B0;
    }
`;

export const ListItem = styled.span`
    width: 90%;
    height: 50px;
    border-bottom: 1px solid #EBEBEB;
    display: flex;
    align-items: center;
    margin: 0 auto;
`;

export const TitleArea = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    flex: 3;
    
`;
export const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 2;

    h6{
        margin: 0;
    }
`;

export const StatusDone = styled.section`
    box-sizing: border-box;
    border-radius: 100px;
    width: 6.6rem;
    height: 10%;
    border: 2px solid #7FC008;
    h6{
        font-size: 0.6rem;
        margin: 0;
        color: #7FC008;
        text-align: center;
    }
`;

export const StatusToDo = styled(StatusDone)`
    border: 2px solid red;
    h6{
        color: red;
    }
`; 
