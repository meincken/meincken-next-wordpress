import Head from "next/head"
import { Container, Layout, Header } from "@/components/Elements/"
import { CMS_NAME } from "@/lib/constants"

export default function Index() {

  return (
    <>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Layout>
        <Container>
          <h1>{CMS_NAME} <small>test</small></h1>
          <h2>{CMS_NAME} <small>test</small></h2>
          <h3>{CMS_NAME} <small>test</small></h3>
          <h4>{CMS_NAME} <small>test</small></h4>
          <h5>{CMS_NAME} <small>test</small></h5>
          <h6>{CMS_NAME} <small>test</small></h6>
          <p></p>
        </Container>
      </Layout>
    </>
  );
}
