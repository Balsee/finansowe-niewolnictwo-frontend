import { IconArrowRight } from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';
import { apply, tw } from 'twind';
import { css } from 'twind/css';
import Wrapper from '../../utils/Wrapper/Wrapper';

export interface IPosts {
  data?: any;
}

export interface IPostsFunctions extends IPosts {}

const Posts: React.FC<IPostsFunctions> = ({ data }: any) => {
  console.log(data);

  const styles = {
    posts: {
      base: tw`py-8`,

      wrapper: tw`flex(& col)`,

      title: tw`text(2xl md:(3xl) lg:(4xl)) font(bold sora) mb-8`,

      posts: tw`flex(& col md:(row)) gap(y-8 md:(x-8))`,
      post: tw`
        flex(& col) relative w-full

        ${css({
          Image: apply`bg-red-500 `,
          h3: apply`absolute bottom-0 w-full py-4 px-6 bg-black text(xl) font(bold)`,
        })}
      `,

      more: tw`p-4 bg-black w-max self-end mt-4 text(uppercase) font(publicSans semibold) flex items-center gap-x-2`,
    },
  };

  return (
    <section className={styles.posts.base}>
      <Wrapper classes={styles.posts.wrapper}>
        <h2 className={styles.posts.title}>Nasze najnowsze posty</h2>

        <div className={styles.posts.posts}>
          {data.map((post: any) => {
            const banner = post.attributes.banner.data.attributes;

            return (
              <Link key={post.id} href={`/blog/${post.attributes.slug}`}>
                <a className={styles.posts.post}>
                  <Image
                    src={process.env.NEXT_PUBLIC_BACKEND_ENDPOINT + banner.url}
                    width={banner.width}
                    height={768}
                    quality={50}
                    layout="responsive"
                    objectFit="cover"
                    alt={banner.alternativeText}
                  />
                  <h3>{post.attributes.title}</h3>
                </a>
              </Link>
            );
          })}
        </div>

        <Link href="/blog">
          <a className={styles.posts.more}>
            więcej <IconArrowRight size={16} stroke={3} />
          </a>
        </Link>
      </Wrapper>
    </section>
  );
};

export default Posts;
