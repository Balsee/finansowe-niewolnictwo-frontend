import { IconArrowRight } from '@tabler/icons';
import Link from 'next/link';
import { apply, tw } from 'twind';
import { css } from 'twind/css';
import Card from '../../common/Card/Card';
import Wrapper from '../../utils/Wrapper/Wrapper';

export interface IPosts {
  data?: any;
  firstSectionRef?: any;
}

export interface IPostsFunctions extends IPosts {}

const Posts: React.FC<IPostsFunctions> = ({ data, firstSectionRef }: any) => {
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
    <section className={styles.posts.base} ref={firstSectionRef}>
      <Wrapper classes={styles.posts.wrapper}>
        <h2 className={styles.posts.title}>Nasze najnowsze posty</h2>

        <div className={styles.posts.posts}>
          {data.map((post: any) => (
            <Card key={post.id} post={post} />
          ))}
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
