import Head from "next/head"
import { Container, Layout, Header } from "@/components/Elements/"
import { CMS_NAME } from "@/lib/constants"

export default function About() {
  return (
    <>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Header />
      <Layout>
        <Container>
          <h2>About</h2>
        </Container>
      </Layout>
    </>
  );
}
