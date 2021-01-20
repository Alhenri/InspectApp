import styled from 'styled-components'

export const HeaderStyle = styled.div`
    height: 100%;
    display: flex;
    @media(max-width: 560px){
        width: 100%;
        height: auto;
        flex-direction: column; 
    }
`;

export const DivHomeIcon = styled.div`
    background-color: #FAFAFA;
    height: 6.1rem;
    width: 6.1rem;
    border-radius: 50%;
    margin-top: 105px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div{
        margin: 2px 0;
        width: 30%;
        height: 0.2rem;
        background-color: #333333;
    }
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
    @media(max-width: 560px){
        width: 100%;
        height: 51px;

        #Icon{
            margin-top:0;
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
        position: relative;
        transition: 0.4s;
        height: 15px;
        width: 15px;
        background-color: #0794B3;
        padding: 2px 2px;
        border-radius: 50%;
        margin-left: ${({ width }: Iprops)=>{ return `${width-8}px` }};
        margin-top: 70px;
        margin-bottom: 20px;

        :hover{
            transform: scale(1.3);
        }
    }

    @media(max-width: 560px){
        width: 100%;
        flex-direction: column;
        img.arrow{
            display: none;
        }
        height: 30px;
    }

`;

export const SpanContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    @media(max-width: 560px){
        flex-direction: row;
        height: 100%;
        span{
            height: 100%;
            justify-content: center;
            border: 0.5px solid #E4E4E4;
            box-sizing: border-box;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
        }
    }
`;

export const SpanStyle = styled.span`
    cursor: pointer;
    display: flex;
    width: 90%;
    font-size: 1.5rem;
    transition: 0.2s;
    align-items: center;
    img{
        height: 1.8rem;
        margin-left: 3px;
        margin-right: 3px; 
    }
    :hover{
        background-color: wheat;
    }
`;