import React, { useState } from 'react';
import { ChangeContent, HeaderStyle, PageBar } from  './style';
import img_op from '../../assets/cardapio.svg'; 
import img_arrow from '../../assets/arrow.svg';
import img_icon from '../../assets/icon.svg';

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
                <ChangeContent width={180}>
                    <img src={img_arrow} className="arrow" alt="->" onClick={()=>{ setStatus(false) }} />
                    <span>
                        <img src={img_icon} alt="error"/>
                        Painel de controle
                    </span>
                </ChangeContent>
                :
                <ChangeContent width={20}>
                    <img src={img_arrow} className="arrow" alt="->" onClick={()=>{ setStatus(true) }} />
                </ChangeContent>
            }
        </HeaderStyle>
    );
}