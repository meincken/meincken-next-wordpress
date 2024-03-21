import Head from "next/head"
import { Container, Layout } from "@/components/Elements/"
import { CMS_NAME } from "@/lib/constants"
import fetch from "isomorphic-fetch"

const page = props => {

  return (
    <>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Layout>
        <Container>
          <h1>{props.title.rendered}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: props.content.rendered,
            }}
          />
        </Container>
      </Layout>
    </>
  );
}

page.getInitialProps = async ({ query }) => {
	const res = await fetch(`http://3.10.142.191/wp-json/wp/v2/pages?slug=index`);
	let data = await res.json();
	data = data[0];
	return data;
};

export default page
