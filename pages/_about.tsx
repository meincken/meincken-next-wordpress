import Head from "next/head"
import { Container, Layout } from "@/components/Elements/"
import { CMS_NAME } from "@/lib/constants"

export default function About() {
  var aboutPage = {
    graphql: () => {
      return `
        query about {
          pages(where: {title: "about"}) {
            edges {
              node {
                id
                title
                content
              }
            }
          }
        }
      `
    }
  }

  return (
    <>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Layout>
        <Container>
          <h2 className="text-4xl">About</h2>
        </Container>
      </Layout>
    </>
  );
}
