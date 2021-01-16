import { ResponsivePie } from '@nivo/pie';
import { DataCicleGraph } from './data/ConfigDataCG';
import verm from '../../../../assets/iconVerm.svg';
import verd from '../../../../assets/iconV.svg';
import lara from '../../../../assets/iconL.svg';
import {
    CircleGraphArea,
    GraphArea,
    ContentLabel,
    LabelStyle,
    Content,
    ContentInfo,
    TableStyle
} from './style';

// Colocar os dados como parametro
interface Iprops{
    data: object[],
    withLabel?: boolean
}

export const MyResponsivePie = ({ withLabel, data }:Iprops) => {
    // Classe que faz a manipulação dos dados para o grafico
    const DataConfig = new DataCicleGraph(data);
    DataConfig.dataConvertMedia();
    
    return (
        <GraphArea>
            <CircleGraphArea>
                <ResponsivePie
                    data={DataConfig.outData}
                    innerRadius={0.8}
                    enableRadialLabels={false}
                    enableSliceLabels={false}
                    padAngle={0}
                    cornerRadius={0}
                    colors={{ scheme: 'nivo' }}
                    borderWidth={1}
                />
            </CircleGraphArea>
        {
            withLabel?
            <Content>
                <ContentLabel>
                    <LabelStyle>
                        <img src={verd} alt="verde"/>
                        <h6>Realizadas</h6>
                    </LabelStyle>
                    <LabelStyle>
                        <img src={lara} alt="verde"/>
                        <h6>Em aberto</h6>
                    </LabelStyle>
                    <LabelStyle>
                        <img src={verm} alt="verde"/>
                        <h6>Não realizadas</h6>
                    </LabelStyle>
                </ContentLabel>
                <ContentInfo>
                    <h6>Media de tempo</h6>
                    <TableStyle>
                        <tr>
                            <td>Hoje</td>
                            <td>10 min</td>
                        </tr>
                        <tr>
                            <td>Ultimos 7 dias</td>
                            <td>10 min</td>
                        </tr>
                        <tr>
                            <td>Ultimos 30 dias</td>
                            <td>10 min</td>
                        </tr>
                    </TableStyle>
                </ContentInfo>
            </Content>:null
        }
        </GraphArea>
    )
}
