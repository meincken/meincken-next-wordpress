import Head from "next/head"
import { GetStaticProps } from "next"
import { Container, HeroPost, Intro, Layout, MoreStories, Header } from "@/components/Elements/"
import { getAllPostsForHome } from "@/lib/api"
import { CMS_NAME } from "@/lib/constants"

export default function Index({ allPosts: { edges } }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Header />
      <Layout>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts },
    revalidate: 10,
  };
};
