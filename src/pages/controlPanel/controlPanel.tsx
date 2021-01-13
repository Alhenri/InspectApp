import React from 'react'
import Card from '../../components/Graph/Card/Card'
import { 
    ContainerLeft,
    ContainerRight,
    BarGraphArea,
    CirGraphArea,
    LeftListArea,
    RightCirGraphArea,
    RightListArea
} from './style';

// Esse componente é responśavel por montar os conteudos 
// especificos de cada opção do header
export default function ControlPanel(){
    return(
        // Conteudo da page
        <>
            <ContainerLeft>
                <BarGraphArea>
                    <Card />
                </BarGraphArea>
                <CirGraphArea>
                    <Card />
                </CirGraphArea>
                <LeftListArea>
                    <Card />
                </LeftListArea>
            </ContainerLeft>
            <ContainerRight>
                <RightCirGraphArea>
                    <Card />
                </RightCirGraphArea>
                <RightListArea>
                    <Card />
                </RightListArea>
            </ContainerRight>
        </>
    )
}