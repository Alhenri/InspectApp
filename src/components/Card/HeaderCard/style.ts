import styled from 'styled-components';

export const HeaderCardStyle = styled.div`
    height: 10%;
    width: 95%;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
`;

export const HeaderTitleArea = styled.div`
    flex: 1;
    h5, h6{
        margin: 0;
        margin-left: 5px;
    }
    h6{
        font-weight: normal;
    }

`;

export const HeaderConfigArea = styled.div`
    display: flex;
    flex: 1;
    img{
        height: 20px;
        transition: 1s;
        :hover{
            transform: rotate(180deg);
        }
        margin-left: auto;
    }
    select{
        flex: 1;
        background: #C4C4C4;
        border-radius: 100px;
        margin-right: 5px;
    }
`;