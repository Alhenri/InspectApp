import React from 'react';
import Header from '../../components/Header/Header'
import { Content, HomeStyle } from './style'
// Na home vou mudar os conteudos, que na verdade serão como novas pages

function Home() {
  return (
    <HomeStyle>
      <Header></Header>
      <Content></Content>
    </HomeStyle>
  );
}

export default Home;