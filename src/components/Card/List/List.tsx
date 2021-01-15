import React from 'react';
import dadoexample from './data/data-example.json';
import {
    ListContent,
    ListItem,
    TitleArea,
    InfoArea,
    StatusDone,
    StatusToDo
} from './style';

interface IDataList{
    plano: string,
    responsavel: string,
    status: string,
    hora: string,
    data: string
}

interface Iprops{
    data: IDataList[]
}

export default function List(){
    const data: IDataList[] = dadoexample as unknown as IDataList[];

    return(
        <ListContent>
            {
                data.map(
                    (dat) => {
                        return(
                            <ListItem>
                                <TitleArea>
                                    <h5>{dat.plano}</h5>
                                    <h6>responsável: {dat.responsavel}</h6>
                                </TitleArea>
                                <InfoArea>
                                    {
                                        dat.status==="true"?
                                        <StatusDone>
                                            <h6>Realizado</h6>
                                        </StatusDone>:
                                        <StatusToDo>
                                            <h6>Pendente</h6>
                                        </StatusToDo>
                                    }
                                    {dat.hora} {dat.data}
                                </InfoArea>
                            </ListItem>
                    )})}
        </ListContent>
    )
}