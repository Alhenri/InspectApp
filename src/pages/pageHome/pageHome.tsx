import React from 'react';
import Header from '../../components/Header/Header';
import ControlPanel from '../controlPanel/controlPanel';
import { Content, ContentArea, HomeStyle, TitleArea } from './style';
import { DataProvider } from '../../context/DataContextProvider'; // provedor de dados
// Na home vou mudar os conteudos, que na verdade serão como novas pages

function Home() {
  return (
    <HomeStyle>
      <Header />
      <Content>
        <TitleArea><h1>Painel de controle</h1></TitleArea>
        <DataProvider>
        <ContentArea>
          {/* Aqui vai ser mostrado o conteudo selecionado no header */}
          <ControlPanel />
        </ContentArea>
        </DataProvider>
      </Content>
    </HomeStyle>
  );
}

export default Home;