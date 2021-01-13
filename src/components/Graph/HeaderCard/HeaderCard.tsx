import React from 'react';
import {
    HeaderCardStyle,
    HeaderTitleArea
} from './style';
import img_settings from '../../../assets/set.svg';

export default function HeaderCard(){
    return(
        <HeaderCardStyle>
            <HeaderTitleArea>
                <h5>Titulo</h5>
                <img src={img_settings} alt="error"/>
            </HeaderTitleArea>
        </HeaderCardStyle>
    )
}