import { gql, request } from 'graphql-request';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../components/utils/Wrapper/Wrapper';
import { getMainLayout } from '../../layouts/Main/MainLayout';

export const getStaticPaths = async () => {
  const endpoint: any = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
  const query = gql`
    query {
      posts {
        data {
          attributes {
            slug
          }
        }
      }
    }
  `;

  const headers = {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API_TOKEN}`,
  };

  const {
    posts: { data },
  } = await request(endpoint, query, headers);

  const paths = data.map((post: any) => {
    return { params: { slug: post.attributes.slug.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const endpoint: any = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

  const query = gql`
    query ($slug: String!) {
      posts(filters: { slug: { eq: $slug } }) {
        data {
          id
          attributes {
            title
            banner {
              data {
                id
                attributes {
                  alternativeText
                  url
                }
              }
            }
            content
            authors {
              data {
                id
                attributes {
                  name
                  email
                }
              }
            }
            publishedAt
          }
        }
      }
    }
  `;

  const variables = {
    slug: params.slug,
  };

  const headers = {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API_TOKEN}`,
  };

  const {
    posts: { data },
  } = await request(endpoint, query, variables, headers);

  return {
    props: { data },
  };
};

const Post = ({ data }: any) => {
  const post = data[0];
  const banner = post.attributes.banner.data.attributes;

  return (
    <article className="my-20 font-publicSans md:my-32">
      <Wrapper>
        <Image
          className="rounded-lg"
          src={process.env.NEXT_PUBLIC_BACKEND_ENDPOINT + banner.url}
          alt={banner.alternativeText}
          layout="responsive"
          objectFit="cover"
          height={48}
          width={128}
        />
        <h1 className="my-8 text-2xl font-bold md:my-16 md:text-3xl lg:text-4xl">{post.attributes.title}</h1>

        <ReactMarkdown className="prose w-full max-w-full" transformImageUri={src => `http://localhost:2137${src}`}>
          {post.attributes.content}
        </ReactMarkdown>
      </Wrapper>
    </article>
  );
};

Post.getLayout = getMainLayout;

export default Post;
