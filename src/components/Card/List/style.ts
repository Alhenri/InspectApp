import styled from 'styled-components'

export const ListContent = styled.div`
    margin-top: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 450px;
    overflow: auto;
`;

export const ListItem = styled.span`
    width: 90%;
    height: 50px;
    border-bottom: 1px solid #EBEBEB;
    display: flex;
    align-items: center;
`;

export const TitleArea = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    flex: 3;
    h5, h6{
        margin: 0;
    }
    h6{
        font-weight: 300;
    }
`;
export const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 2;
`;

export const StatusDone = styled.section`
    box-sizing: border-box;
    border-radius: 100px;
    width: 100%;
    height: 10%;
    border: 2px solid #7FC008;
    h6{
        font-size: 10px;
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
