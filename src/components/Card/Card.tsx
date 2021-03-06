import React, { useContext } from 'react';
import dataContext from '../../context/DataContextProvider';
import HeaderCard from './HeaderCard/HeaderCard';
import {MyResponsiveBar} from './Graph/BarGraph/BarGrapg';
import { MyResponsivePie } from './Graph/CircleGraph/CircleGraph';
import Input from '../Input/Input';
import Table from './Table/Table';
import List from './List/List';
import {
    CardStyle,
    ContentCard
} from './style'

interface Iprops{
    title?: string,
    subTitle?: string,
    withSelector?: boolean,
    withInput?: boolean,
    withLabel?: boolean,
    children?: JSX.Element, // talvez precise
    data: Object[],
    type: string
}

export default function Card({title, withSelector, subTitle, type, withInput, withLabel, data }:Iprops){
    const { dado, changeData } = useContext(dataContext)

    function chooseContent(){
        switch (type) {
            case "BarGraph":
                return <MyResponsiveBar dado={data} />
            case "CircleGraph":
                return <MyResponsivePie withLabel={withLabel} data={data}/>
            case "Table":
                return <Table data={data} />
            case "List":
                return <List data={data} />
            default:
                break;
        }
    }

    return(
        <CardStyle className="Card" type={type}>
            <HeaderCard title={title} withSelector={withSelector} subTitle={subTitle} />
            <ContentCard>
                {withInput?<Input/>:null}
                {chooseContent()}
            </ContentCard>
        </CardStyle>
    )
}