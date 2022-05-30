import Image from 'next/image';
import Link from 'next/link';

export interface ICard {
  post: {
    id: string;
    attributes: any;
  };
}

export interface ICardFunctions extends ICard {}

const Card: React.FC<ICardFunctions> = ({ post }) => {
  const banner = post.attributes.banner.data.attributes;

  return (
    <Link href={`/blog/${post.attributes.slug}`}>
      <a className="relative flex h-48 w-full flex-col rounded-lg">
        <Image
          src={process.env.NEXT_PUBLIC_BACKEND_ENDPOINT + banner.url}
          width={banner.width}
          // height={768}
          quality={50}
          layout="fill"
          objectFit="cover"
          alt={banner.alternativeText}
          className="rounded-lg"
        />
        <h3 className="absolute bottom-0 w-full rounded-b-lg py-4 px-6 text-xl font-bold text-white">
          {post.attributes.title}
        </h3>
      </a>
    </Link>
  );
};

export default Card;
