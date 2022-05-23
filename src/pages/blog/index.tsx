import request, { gql } from 'graphql-request';
import React from 'react';
import { tw } from 'twind';
import Card from '../../components/common/Card/Card';
import Wrapper from '../../components/utils/Wrapper/Wrapper';
import { getMainLayout } from '../../layouts/Main/MainLayout';

export const getServerSideProps = async () => {
  const endpoint: any = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

  const query = gql`
    query {
      posts(sort: "publishedAt:desc") {
        data {
          attributes {
            title
            slug
            banner {
              data {
                attributes {
                  height
                  width
                  alternativeText
                  url
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await request(endpoint, query);

  return {
    props: { data },
  };
};

const Blog = ({ data }: any) => {
  const posts = data.posts.data;

  const styles = {
    posts: {
      base: tw`mt-32 mb-16`,

      wrapper: tw`grid(& cols-1 md:(cols-3)) gap-8`,
    },
  };

  return (
    <section className={styles.posts.base}>
      <Wrapper classes={styles.posts.wrapper}>
        {posts.map((post: any) => (
          <Card key={post.id} post={post} />
        ))}
      </Wrapper>
    </section>
  );
};

Blog.getLayout = getMainLayout;

export default Blog;
