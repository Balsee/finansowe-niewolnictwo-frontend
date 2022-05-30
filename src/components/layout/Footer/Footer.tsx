import Link from 'next/link';
import Separator from '../../utils/Separator/Separator';
import Wrapper from '../../utils/Wrapper/Wrapper';

export interface IFooter {}

export interface IFooterFunctions extends IFooter {}

const Footer: React.FC<IFooterFunctions> = () => {
  return (
    <footer className="font-publicSans">
      <Wrapper classes="flex flex-col gap-y-4">
        <div className="mb-8 flex flex-col gap-y-8 sm:flex-row sm:justify-between sm:gap-x-8">
          <h2 className="font-sora text-xl font-bold">
            Finansowe <span>Niewolnictwo</span>
          </h2>

          <div className="flex justify-start gap-x-8 md:gap-x-32 lg:gap-x-48 xl:gap-x-64">
            <div className="flex flex-col gap-y-4">
              <span className="opacity-50">Odnośniki</span>

              <ul className="flex flex-col gap-y-1">
                <li>
                  <Link href="/">
                    <a>Strona Główna</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sklep">
                    <a>Sklep</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-4">
              <span className="opacity-50">Informacje</span>

              <ul className="flex flex-col gap-y-1">
                <li>Polityka Prywatności</li>
                <li>Polityka plików Cookies</li>
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        <div className="mb-8 flex flex-col">
          <span className="text-xs opacity-50">&copy;2022. By Dawid Seipold.</span>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
