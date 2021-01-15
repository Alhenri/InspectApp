import React from 'react'
import Card from '../../components/Card/Card'
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
                    <Card title="Historico de eventos" withSelector type="BarGraph" />
                </BarGraphArea>
                <CirGraphArea>
                    <Card title="Inspeções" subTitle="status do dia" type="CircleGraph" />
                    <Card title="Plano de ação" subTitle="status do dia" type="CircleGraph" />
                </CirGraphArea>
                <LeftListArea>
                    <Card title="Inspeções agendadas" withSelector withInput type="Table"  />
                </LeftListArea>
            </ContainerLeft>
            <ContainerRight>
                <RightCirGraphArea>
                    <Card title="Planos de ação" subTitle="Visão geral" type="CircleGraph"/>
                </RightCirGraphArea>
                <RightListArea>
                    <Card title="Planos de ação" subTitle="Atualizações"  withSelector withInput/>
                </RightListArea>
            </ContainerRight>
        </>
    )
}