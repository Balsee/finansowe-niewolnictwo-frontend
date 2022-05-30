import { IconArrowRight } from '@tabler/icons';
import Link from 'next/link';
import Card from '../../common/Card/Card';
import Wrapper from '../../utils/Wrapper/Wrapper';

export interface IPosts {
  data?: any;
  firstSectionRef?: any;
}

export interface IPostsFunctions extends IPosts {}

const Posts: React.FC<IPostsFunctions> = ({ data, firstSectionRef }: any) => {
  return (
    <section className="py-8" ref={firstSectionRef}>
      <Wrapper classes="flex flex-col">
        <h2 className="mb-8 font-sora text-2xl font-bold md:text-3xl lg:text-4xl">Nasze najnowsze posty</h2>

        <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-8">
          {data.map((post: any) => (
            <Card key={post.id} post={post} />
          ))}
        </div>

        <Link href="/blog">
          <a className="text-uppercase mt-4 flex w-max items-center gap-x-2 self-end rounded-lg border p-4 font-publicSans font-semibold capitalize">
            więcej <IconArrowRight size={16} stroke={3} />
          </a>
        </Link>
      </Wrapper>
    </section>
  );
};

export default Posts;
