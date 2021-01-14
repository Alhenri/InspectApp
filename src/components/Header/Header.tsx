import React, { useState } from 'react';
import img_op from '../../assets/cardapio.svg'; 
import img_arrow from '../../assets/arrow.svg';
import img_icon from '../../assets/icon.svg';
import { 
    ChangeContent,
    HeaderStyle,
    PageBar,
    SpanContainer,
    SpanStyle
} from  './style';

interface Iprops{
    OnClick?: Function,
}

export default function Header({ OnClick }: Iprops ){

    const [ status, setStatus ] = useState(true);

    return (
        <HeaderStyle>
            <PageBar>
                <img src={img_op} alt="op" onClick={()=>{console.log("clicou")}} />
            </PageBar>

            {/* controle da barra de mudança de conteudo */}
            {
                status?// Quando maximizado
                <ChangeContent width={180}>
                    <img src={img_arrow} className="arrow" alt="->" onClick={()=>{ setStatus(false) }} />
                    
                    <SpanContainer>
                        <SpanStyle className="controlPanel" onClick={(event) =>{ 
                            if(OnClick){
                                OnClick(event.currentTarget.className);
                            }
                        }}>
                            <img src={img_icon} alt="error"/>
                            Painel de controle
                        </SpanStyle>
                    </SpanContainer>
                </ChangeContent>
                :// Quando minimizado
                <ChangeContent width={20}>
                    <img src={img_arrow} className="arrow" alt="->" onClick={()=>{ setStatus(true) }} />
                </ChangeContent>
            }
        </HeaderStyle>
    );
}