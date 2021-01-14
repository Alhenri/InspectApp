import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import ControlPanel from '../controlPanel/controlPanel';
import { Content, ContentArea, HomeStyle, TitleArea } from './style';
import { DataProvider } from '../../context/DataContextProvider'; // provedor de dados
import { title } from 'process';
// Na home vou mudar os conteudos, que na verdade serão como novas pages

function Home() {

  interface IContent {
    title: string,
    component: JSX.Element
  }

  const [content, setContent] = useState<IContent>({
    title: "Painel de controle",
    component: <ControlPanel />
  });

  function chooseContent(info: string){
    switch (info) {
      case "controlPanel":
        setContent({
          title: "Painel de controle",
          component: <ControlPanel />
        });
        break;
      case "example":
        setContent({
          title: "Exemplo",
          component: <div>Esse é um exemplo de uma tela não construida</div>
        })
      break;
    }
  }

  return (
    <HomeStyle>
      <Header OnClick={chooseContent}/>
      <Content>
        <TitleArea><h1>{content.title}</h1></TitleArea>
        <DataProvider>
        <ContentArea>
          {
            content.component
          }
        </ContentArea>
        </DataProvider>
      </Content>
    </HomeStyle>
  );
}

export default Home;