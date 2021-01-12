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

    img{
        transition: 0.2s;
        height: 2vh;
        right: 1px;
        top: 2px;
        transform: rotate(180deg);
        margin-left: ${({ width }: Iprops)=>{ return `${width-18}px` }};
        :hover{
            height: 2.5vh;
        }
    }
`;