import dado from './data/data-example.json';
import { ResponsiveBar } from '@nivo/bar';
import verm from '../../../../assets/iconVerm.svg';
import verd from '../../../../assets/iconV.svg';
import lara from '../../../../assets/iconL.svg';

import {
    GraphArea,
    ContentGraph,
    ContentLabel,
    LabelStyle
} from './style';


// colocar os dados como parametro
export const MyResponsiveBar = () => {
    
    return (
        <ContentGraph className="teste">
            <GraphArea>
                <ResponsiveBar
                    data={dado}
                    keys={[ 'Azul', 'Vermelho', 'Roxo']}
                    indexBy="Day"
                    padding={0.3}
                    groupMode="grouped"
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'nivo' }}
                    enableGridY={false}
                    labelTextColor={{ from: 'color', modifiers: [ [ 'opacity', 0 ] ] }}
                />
            </GraphArea>
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
        </ContentGraph>
    )
}
