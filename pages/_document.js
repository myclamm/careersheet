import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

  render () {
    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
          {/* CSS Files */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
          <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
          <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
          <link rel='stylesheet' href='/static/css/base.css' />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
          <link href="https://fonts.googleapis.com/css?family=Karla" rel="stylesheet"/>
          <link rel='stylesheet' href='/static/css/vendor/alice-carousel.css'/>          
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}