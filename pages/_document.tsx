import Document, {
  Head,
  Main,
  NextDocumentContext,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { GlobalStyle } from '../components';

export default class WpxDocument extends Document<{ styleTags: string[] }> {
  static getInitialProps({ renderPage }: NextDocumentContext) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>WPX Limited</title>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
            rel="stylesheet"
          />
          <meta
            name="google-site-verification"
            content="7SxDuxh-ely-DXhfj05gk4iKhCa3SjVQyC-3usdVwDo"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <GlobalStyle />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
