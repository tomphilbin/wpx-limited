import App, { Container, NextAppContext } from 'next/app'
import Head from 'next/head'
import React from 'react'

export default class WpxApp extends App {
  static getInitialProps = async ({ Component, ctx }: NextAppContext) => ({
    pageProps: Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {},
  })

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>WPX Limited</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
