import { Switch } from '@headlessui/react';
import { IconSortAscending, IconSortDescending } from '@tabler/icons';
import request, { gql } from 'graphql-request';
import React, { useEffect, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
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
  const [query, setQuery] = useState('');
  const [isNew, setIsNew] = useState(true);
  const debouncedQuery = useDebounce<string>(query, 500);

  const posts = data.posts.data;

  const handleQueryChange = (e: any) => {
    setQuery(e.target.value);
  };

  const filteredPosts = posts.filter((post: any) =>
    post.attributes.title.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  useEffect(() => {
    console.log(filteredPosts);
  }, [filteredPosts]);

  return (
    <section className="mt-16 mb-16 md:mt-24">
      <Wrapper>
        <div className="relative flex flex-col items-start justify-between gap-y-4 border-t bg-white py-4 md:flex-row md:border-0">
          <h1 className="font-sora text-2xl font-bold md:text-4xl">Blog</h1>

          <div className="static z-10 flex w-full items-center justify-end gap-x-4 bg-white">
            <input
              onChange={handleQueryChange}
              value={query}
              type="text"
              placeholder="Szukaj"
              className="mr-auto w-full max-w-xs rounded-lg border px-4 py-2 md:mr-0"
            />

            <Switch checked={isNew} onChange={setIsNew}>
              {!isNew ? <IconSortAscending size={24} /> : <IconSortDescending size={24} />}
            </Switch>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-3">
          {filteredPosts.length === 0
            ? 'Brak postów'
            : !isNew
            ? filteredPosts.reverse().map((post: any) => <Card key={post.id} post={post} />)
            : filteredPosts.map((post: any) => <Card key={post.id} post={post} />)}
        </div>
      </Wrapper>
    </section>
  );
};

Blog.getLayout = getMainLayout;

export default Blog;
