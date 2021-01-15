import { ResponsivePie } from '@nivo/pie';
import dado from '../BarGraph/data/data-example.json';
import {dataFilter} from './data/dataFilter';
import verm from '../../../../assets/iconVerm.svg';
import verd from '../../../../assets/iconV.svg';
import lara from '../../../../assets/iconL.svg';
import {
    CircleGraphArea,
    GraphArea,
    ContentLabel,
    LabelStyle,
} from './style';

// Colocar os dados como parametro

export const MyResponsivePie = () => {
    const data = dataFilter(dado); 
    //dado as [] // Forçando tipagem pra evitar erro '-'
    return (
        <GraphArea>
            <CircleGraphArea>
                <ResponsivePie
                    data={data}
                    innerRadius={0.8}
                    enableRadialLabels={false}
                    enableSliceLabels={false}
                    padAngle={0}
                    cornerRadius={0}
                    colors={{ scheme: 'nivo' }}
                    borderWidth={1}
                />
            </CircleGraphArea>
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
        </GraphArea>
    )
}
