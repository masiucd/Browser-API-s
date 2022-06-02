import Head from "next/head"
import {Fragment, ReactElement} from "react"
import Layout, {InnerLayout} from "~components/layout/layout"

const Home = (): JSX.Element => {
  return (
    <Fragment>
      <Head>
        <title>E commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Fragment>
  )
}
Home.getLayout = function (page: ReactElement) {
  return (
    <Layout>
      <InnerLayout>{page}</InnerLayout>
    </Layout>
  )
}

export default Home
