import { gql, GraphQLClient } from 'graphql-request';
// import { tw } from 'twind';
import { useRef } from 'react';
import { NextPageWithLayout } from '../../types/page';
import Hero from '../components/sections/Hero/Hero';
import Newsletter from '../components/sections/Newsletter/Newsletter';
import Posts from '../components/sections/Posts/Posts';
import { getMainLayout } from '../layouts/Main/MainLayout';

export const getStaticProps = async () => {
  const endpoint: any = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API_TOKEN}`,
    },
  });

  const query = gql`
    query {
      posts(sort: "publishedAt:desc", pagination: { limit: 3 }) {
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

      frontPageHero {
        data {
          attributes {
            title
            subtitle
            image {
              data {
                attributes {
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

  const data = await client.request(query);

  return {
    props: { data },
  };
};

const Home: NextPageWithLayout = ({ data }: any) => {
  const firstSectionRef = useRef();

  const heroData = data.frontPageHero.data;
  const postsData = data.posts.data;

  return (
    <>
      <Hero firstSectionRef={firstSectionRef} data={heroData} />
      <Posts firstSectionRef={firstSectionRef} data={postsData} />
      <Newsletter />
    </>
  );
};

Home.getLayout = getMainLayout;

export default Home;
