import React, { useContext } from 'react';
import dataContext from '../../../context/DataContextProvider';
import HeaderCard from '../HeaderCard/HeaderCard';
import {
    CardStyle,
    ContentCard
} from './style'

export default function Card(){
    //const { dado, changeData } = useContext(dataContext)

    return(
        <CardStyle>
            <HeaderCard />
            <ContentCard />
        </CardStyle>
    )
}