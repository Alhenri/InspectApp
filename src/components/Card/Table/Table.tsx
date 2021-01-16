import React from 'react';
import DataTable from './data/configDataTable'
import {
    TableStyle,
    ContentTable
} from './style'

interface IDataTable{
    nome: string,
    planejado: number,
    realizado: number,
    lastAtt: string

}
interface Iprops{
    data: object[]
}

export default function Table({ data }:Iprops){
    const dataTable = new DataTable(data);
    dataTable.dataConverter();

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
                        dataTable.outData.map((line)=>{
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