import React from 'react';
import Header from '../../components/Header/Header';
import ControlPanel from '../controlPanel/controlPanel';
import { Content, ContentArea, HomeStyle, TitleArea } from './style'
// Na home vou mudar os conteudos, que na verdade serão como novas pages

function Home() {
  return (
    <HomeStyle>
      <Header />
      <Content>
        <TitleArea><h1>Painel de controle</h1></TitleArea>
        <ContentArea>
          {/* Aqui vai ser mostrado o conteudo selecionado no header */}
          <ControlPanel />
        </ContentArea>
      </Content>
    </HomeStyle>
  );
}

export default Home;