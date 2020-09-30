import Head from 'next/head'
import GlobalStyle from '../styles/globals';
import {FaHeart} from 'react-icons/fa';

import { Main }from '../styles/containers';

import Title from '../src/components/Title';

import Chronometer from '../src/components/Chronometer';

const message = 'Estou contando até os segundos para te ver';

export default function Home() {
  return (
    <>
      <Head>
        <title>Teamo</title>
      </Head>
      <GlobalStyle />
      <Main>
        <Title message={message}/>
        <Chronometer />
        <p color="#efefef">Fiz com todo meu coração. Te amo, lindo <FaHeart color="red"/> </p>
      </Main>
      
    </>
  )
}
