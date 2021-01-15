import styled from 'styled-components'

export const HeaderStyle = styled.div`
    height: 100%;
    display: flex;
`;

export const PageBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 51px;
    height: 100%;
    left: 0px;
    top: 0px;

    img{
        width: 24px;
        background-color: white;
        padding: 10px;
        border-radius: 12px;
        top: 10vh;
        margin: 5px auto;
        transition: 0.3s;
        :hover{
            background-color: #E2E2E2;
            border-radius: 6px;
        }
    }

    background: linear-gradient(180deg, #0DB2D6 8.12%, #4FDA91 71.62%);
`;

interface Iprops {
    width: number,
    arrow?: number
}

export const ChangeContent = styled.div`
    transition: 0.4s;
    height: 100%;
    background-color: #FAFAFA;
    width: ${({ width }: Iprops)=>{ return `${width}px` }};
    border: 1px solid #EBEBEB;
    border-top: none;
    border-bottom: none;
    border-left: none;

    img.arrow{
        transition: 0.4s;
        height: 15px;
        right: 1px;
        top: 2px;
        background-color: #0794B3;
        padding: 2px 4px;
        border-radius: 30px;
        margin-left: ${({ width }: Iprops)=>{ return `${width-18}px` }};
        margin-top: 5px;
        margin-bottom: 5vh;

        :hover{
            transform: scale(1.3);
        }
    }

`;

export const SpanContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const SpanStyle = styled.span`
    cursor: pointer;
    display: flex;
    transition: 0.2s;
    img{
        margin-left: 3px;
       margin-right: 3px; 
    }
    :hover{
        background-color: wheat;
    }
`;