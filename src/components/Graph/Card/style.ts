import styled from 'styled-components';

export const CardStyle = styled.div`
    flex: 1;
    height: 100%;
    width: 100%;
    background-color: white;

    border: 0.5px solid #E4E4E4;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ContentCard = styled.div`
    flex: 9;
    width: 100%;
`;