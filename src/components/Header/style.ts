import styled from 'styled-components'

export const HeaderStyle = styled.div`
    height: 100vh;
    display: flex;
`;

export const PageBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 51px;
    height: 100vh;
    left: 0px;
    top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 24px;
        background-color: white;
        padding: 10px;
        border-radius: 12px;
        top: 10vh;
        margin: 0 auto;
        :hover{
            background-color: #FAFAFA;
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
    transition: 0.2s;
    height: 100vh;
    background-color: #FAFAFA;
    width: ${({ width }: Iprops)=>{ return `${width}px` }};
    border: 1px solid #EBEBEB;
    border-top: none;
    border-bottom: none;
    border-left: none;
    

    img{
        transition: 0.2s;
        height: 10px;
        right: 1px;
        top: 2px;
        background-color: #0794B3;
        padding: 2px 4px;
        border-radius: 20px;
        margin-left: ${({ width }: Iprops)=>{ return `${width-18}px` }};
        :hover{
            height: 15px;
        }
    }
`;