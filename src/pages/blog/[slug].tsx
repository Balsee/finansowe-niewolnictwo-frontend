import { gql, request } from 'graphql-request';
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

  const {
    posts: { data },
  } = await request(endpoint, query);

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

  const {
    posts: { data },
  } = await request(endpoint, query, variables);

  return {
    props: { data },
  };
};

const Post = ({ data }: any) => {
  const post = data[0];

  return <div>{post.attributes.title}</div>;
};

Post.getLayout = getMainLayout;

export default Post;
