import Head from 'next/head'
import GlobalStyle from '../styles/globals';

import { Main }from '../styles/containers';

import Title from '../src/components/Title';

const message = 'Estou contando até os segundos para te ver!';

export default function Home() {
  return (
    <>
      <Head>
        <title>Teamo</title>
      </Head>
      <GlobalStyle />
      <Main>
        <Title message={message} />
      </Main>
    </>
  )
}
