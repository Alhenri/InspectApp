import { ResponsivePie } from '@nivo/pie'
import dado from '../BarGraph/data/data-example.json'
import { CircleGraphArea } from './style';
import {dataFilter} from './data/dataFilter'

export const MyResponsivePie = () => {
    const data = dataFilter(dado); 
    //dado as [] // Forçando tipagem pra evitar erro '-'
    return (
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
    )
}
