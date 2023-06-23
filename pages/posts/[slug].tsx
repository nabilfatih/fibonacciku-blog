import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import markdownToHtml from "../../lib/markdownToHtml";
import type PostType from "../../interfaces/post";
import { NextSeo } from "next-seo";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32 mt-16">
              <NextSeo
                title={`${post.title} | Blog - FibonacciKu`}
                description={post.excerpt}
                openGraph={{
                  url: `https://auth.fibonacciku.tech/posts/${post.slug}`,
                  title: `${post.title} | Blog - FibonacciKu`,
                  description: post.excerpt,
                  images: [
                    {
                      url: post.ogImage.url,
                      width: 800,
                      height: 600,
                      alt: post.title,
                    },
                  ],
                  site_name: "Blog - FibonacciKu",
                }}
              />
              <PostHeader
                title={post.title}
                theme={post.theme}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "theme",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = post.content;

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
