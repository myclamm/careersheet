import Head from 'next/head'

const Layout = (props) => (
  <div>
    <Head>
      <title>CareerSheet</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {props.children}
  </div>
)

export default Layout