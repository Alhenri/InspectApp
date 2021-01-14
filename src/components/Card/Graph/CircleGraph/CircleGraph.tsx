import { ResponsivePie } from '@nivo/pie'
import dado from './data/data-example.json'
import { CircleGraphArea } from './style';

export const MyResponsivePie = () => {
    const data: [] = dado as [] // Forçando tipagem pra evitar erro '-'
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
