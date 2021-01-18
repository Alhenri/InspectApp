import styled from 'styled-components';

interface IProps{
    type: string
}

export const CardStyle = styled.div`
    flex: 1;
    height: ${({type}:IProps)=> type==="List"?"97.5%":"95%"};
    width: 95%;
    background-color: white;

    border: 0.5px solid #E4E4E4;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const ContentCard = styled.div`
    height: 100%;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;