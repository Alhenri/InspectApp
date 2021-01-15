import React from 'react';
import {
    TableStyle,
    ContentTable
} from './style'
import dados from './data/dados.json';

interface IDataTable{
    nome: string,
    planejado: number,
    realizado: number,
    lastAtt: string

}
interface Iprops{
    Lines: IDataTable[]
}

export default function Table(){
    const Lines: IDataTable[] = dados as unknown as IDataTable[]
    return(
        <ContentTable>
            <TableStyle>
                <tr className="Index" >
                    <th className="Name">
                        Nome
                    </th>
                    <th>
                        Planejado
                    </th>
                    <th>
                        Realizado
                    </th>
                    <th>
                        Ultima atualização
                    </th>
                </tr>
                    {
                        Lines.map((line)=>{
                            return(
                                <tr className="Data">
                                    <td className="Name" >
                                        {line.nome}
                                    </td>
                                    <td>
                                        {line.planejado}
                                    </td>
                                    <td>
                                        {line.realizado}
                                    </td>
                                    <td>
                                        {line.lastAtt}
                                    </td>
                                </tr>
                            )
                        })
                    }
            </TableStyle>
        </ContentTable>
    )
}