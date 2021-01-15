import dado from './data/data-example.json';
import { ResponsiveBar } from '@nivo/bar';
import { GraphArea } from './style';


// colocar os dados como parametro
export const MyResponsiveBar = () => {
    
    return (
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
    )
}
