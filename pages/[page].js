import fetch from "isomorphic-fetch";
import { Container, Layout } from "@/components/Elements/"

const page = props => {
	return (
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
	);
};


page.getInitialProps = async ({ query }) => {
	const res = await fetch(`http://3.10.142.191/wp-json/wp/v2/pages?slug=${query.page}`);
	let data = await res.json();
	data = data[0];

	return data;
};

export default page;
