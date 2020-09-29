import App from 'next/app'
import React, { Fragment } from 'react'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components'


const theme = {
  colors: {
    primary: '#0070f3',
  },
}


export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Fragment>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Fragment>

    )
  }
}

MyApp.getInitialProps = async (appContext) => {

  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}