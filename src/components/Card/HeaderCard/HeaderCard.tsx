import React from 'react';
import {
    HeaderCardStyle,
    HeaderTitleArea,
    HeaderConfigArea
} from './style';
import img_settings from '../../../assets/set.svg';

interface Iprops{
    title?: string,
    subTitle?: string,
    withSelector?: boolean,
}

export default function HeaderCard({title, withSelector, subTitle}: Iprops){
    return(
        <HeaderCardStyle>
            <HeaderTitleArea>
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
            </HeaderTitleArea>
            <HeaderConfigArea>
                {
                    withSelector?
                    <select >
                        <option value="Diário" selected>Diário</option>
                        <option value="Semanal" selected>Semanal</option>
                        <option value="Mensal" selected>Mensal</option>
                        <option value="Anual" selected>Anual</option>
                    </select>:null
                }

                <img src={img_settings} alt="error"/>
            </HeaderConfigArea>
        </HeaderCardStyle>
    )
}