import React from 'react';
import DataList from './data/configDataList';

import {
    ListContent,
    ListItem,
    TitleArea,
    InfoArea,
    StatusDone,
    StatusToDo
} from './style';

interface Iprops{
    data: object[]
}

export default function List({data}: Iprops){
    const dataList = new DataList(data);
    dataList.dataConverter();

    return(
        <ListContent>
            {
                dataList.outData.map(
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
                                    <h6>
                                        {dat.hora} {dat.data}
                                    </h6>
                                </InfoArea>
                            </ListItem>
                    )})}
        </ListContent>
    )
}