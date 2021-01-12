import React, { useState } from 'react';
import { ChangeContent, HeaderStyle, PageBar } from  './style';
import img_op from '../../assets/cardapio.svg'; 
import img_arrow from '../../assets/arrow.svg';

export default function Header(){

    const [ status, setStatus ] = useState(true);

    return (
        <HeaderStyle>
            <PageBar>
                <img src={img_op} alt="op" onClick={()=>{console.log("clicou")}} />
            </PageBar>

            {/* controle da barra de mudança de conteudo */}
            {
                status?
                <ChangeContent width={200}>
                    <img src={img_arrow} alt="->" onClick={()=>{ setStatus(false) }} />
                </ChangeContent>
                :
                <ChangeContent width={20}>
                <img src={img_arrow} alt="->" onClick={()=>{ setStatus(true) }} />
                </ChangeContent>
            }
        </HeaderStyle>
    );
}