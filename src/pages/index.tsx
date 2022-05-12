import { gql, request } from 'graphql-request';
// import { tw } from 'twind';
import { NextPageWithLayout } from '../../types/page';
import Posts from '../components/layout/Posts/Posts';
// import Slider from '../components/layout/Slider/Slider';
import Newsletter from '../components/sections/Newsletter/Newsletter';
import { getMainLayout } from '../layouts/Main/MainLayout';

// export const getStaticProps = async () => {
//   const endpoint: any = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

//   const query = gql`
//     query {
//       slides {
//         data {
//           id
//           attributes {
//             title
//             image {
//               data {
//                 id
//                 attributes {
//                   alternativeText
//                   url
//                   width
//                   height
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `;

//   const {
//     slides: { data: slidesData },
//   } = await request(endpoint, query);

//   return {
//     props: { slidesData },
//   };
// };

export const getStaticProps = async () => {
  const endpoint: any = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

  const query = gql`
    query {
      posts(sort: "publishedAt:asc", pagination: { limit: 3 }) {
        data {
          id
          attributes {
            title
            slug
            banner {
              data {
                attributes {
                  alternativeText
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  `;

  const {
    posts: { data: postsData },
  } = await request(endpoint, query);

  return {
    props: { postsData },
  };
};

const Home: NextPageWithLayout = ({ postsData }: any) => {
  // console.log(postsData);

  return (
    <>
      {/* <Slider data={slidesData} /> */}
      <Posts data={postsData} />
      <Newsletter />
    </>
  );
};

Home.getLayout = getMainLayout;

export default Home;
