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
                    <Card title="Historico de eventos" withSelector />
                </BarGraphArea>
                <CirGraphArea>
                    <Card title="Inspeções" subTitle="status do dia" />
                    <Card title="Plano de ação" subTitle="status do dia" />
                </CirGraphArea>
                <LeftListArea>
                    <Card title="Inspeções agendadas" withSelector/>
                </LeftListArea>
            </ContainerLeft>
            <ContainerRight>
                <RightCirGraphArea>
                    <Card title="Planos de ação" subTitle="Visão geral" />
                </RightCirGraphArea>
                <RightListArea>
                    <Card title="Planos de ação" subTitle="Atualizações"  withSelector/>
                </RightListArea>
            </ContainerRight>
        </>
    )
}