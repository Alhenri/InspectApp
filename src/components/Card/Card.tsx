import React, { useContext } from 'react';
import dataContext from '../../context/DataContextProvider';
import HeaderCard from './HeaderCard/HeaderCard';
import {MyResponsiveBar} from './Graph/BarGraph/BarGrapg';
import { MyResponsivePie } from './Graph/CircleGraph/CircleGraph';
import Input from '../Input/Input';
import Table from './Table/Table';
import {
    CardStyle,
    ContentCard
} from './style'

interface Iprops{
    title?: string,
    subTitle?: string,
    withSelector?: boolean,
    withInput?: boolean,
    children?: JSX.Element,
    type?: string
}

export default function Card({title, withSelector, subTitle, children, type, withInput }:Iprops){
    const { dado, changeData } = useContext(dataContext)

    function chooseContent(){
        switch (type) {
            case "BarGraph":
                return <MyResponsiveBar />
            case "CircleGraph":
                return <MyResponsivePie />
            case "Table":
                return <Table />
            default:
                break;
        }
    }

    return(
        <CardStyle className="Card">
            <HeaderCard title={title} withSelector={withSelector} subTitle={subTitle} />
            <ContentCard>
                {withInput?<Input/>:null}
                {chooseContent()}
            </ContentCard>
        </CardStyle>
    )
}