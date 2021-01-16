import React, { useContext } from 'react'
import Card from '../../components/Card/Card'
import DataContext from '../../context/DataContextProvider';
import { 
    ContainerLeft,
    ContainerRight,
    BarGraphArea,
    CirGraphArea,
    LeftListArea,
    RightCirGraphArea,
    RightListArea
} from './style';

interface IDataOut{
    Graph: object[],
    List: object[],
    Table: object[]
}

// Esse componente é responśavel por montar os conteudos 
// especificos de cada opção do header
export default function ControlPanel(){
    const { dado } = useContext(DataContext);
    const data: IDataOut = dado as unknown as IDataOut;
    return(
        // Conteudo da page
        <>
            <ContainerLeft>
                <BarGraphArea>
                    <Card title="Historico de eventos" withSelector type="BarGraph" data={data.Graph} />
                </BarGraphArea>
                <CirGraphArea>
                    <Card title="Inspeções" subTitle="status do dia" type="CircleGraph" withLabel data={data.Graph}/>
                    <Card title="Plano de ação" subTitle="status do dia" type="CircleGraph" withLabel data={data.Graph} />
                </CirGraphArea>
                <LeftListArea>
                    <Card title="Inspeções agendadas" withSelector withInput type="Table"  data={data.Table}/>
                </LeftListArea>
            </ContainerLeft>
            <ContainerRight>
                <RightCirGraphArea>
                    <Card title="Planos de ação" subTitle="Visão geral" type="CircleGraph" data={data.Graph}/>
                </RightCirGraphArea>
                <RightListArea>
                    <Card title="Planos de ação" subTitle="Atualizações" type="List" withSelector withInput data={data.List}/>
                </RightListArea>
            </ContainerRight>
        </>
    )
}