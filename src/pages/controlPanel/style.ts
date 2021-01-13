import styled from 'styled-components';

export const ContainerLeft = styled.div`
    height: 95%;
    background-color: black;
    flex: 2;
    margin-left: 5px;
`;

export const ContainerRight = styled(ContainerLeft)`
    flex: 1;
    background-color: blue;
    margin-right: 5px;
`; 