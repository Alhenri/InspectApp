import React, { useContext } from 'react';
import dataContext from '../../../context/DataContextProvider';
import HeaderCard from '../HeaderCard/HeaderCard';
import {
    CardStyle,
    ContentCard
} from './style'

interface Iprops{
    title?: string,
    subTitle?: string,
    withSelector?: boolean,
}

export default function Card({title, withSelector, subTitle}:Iprops){
    //const { dado, changeData } = useContext(dataContext)

    return(
        <CardStyle className="Card">
            <HeaderCard title={title} withSelector={withSelector} subTitle={subTitle} />
            <ContentCard />
        </CardStyle>
    )
}