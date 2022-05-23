import Image from 'next/image';
import Link from 'next/link';
import { apply, tw } from 'twind';
import { css } from 'twind/css';

export interface ICard {
  post: {
    id: string;
    attributes: any;
  };
}

export interface ICardFunctions extends ICard {}

const Card: React.FC<ICardFunctions> = ({ post }) => {
  console.log(post);

  const styles = {
    card: {
      base: tw`
      flex(& col) relative w-full

      ${css({
        Image: apply`bg-red-500 `,
        h3: apply`absolute bottom-0 w-full py-4 px-6 bg-black text(xl) font(bold)`,
      })}
    `,
    },
  };

  const banner = post.attributes.banner.data.attributes;

  return (
    <Link href={`/blog/${post.attributes.slug}`}>
      <a className={styles.card.base}>
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
};

export default Card;
