import { Switch } from '@headlessui/react';
import { IconBrandInstagram, IconMenu2, IconX } from '@tabler/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import Wrapper from '../../utils/Wrapper/Wrapper';

export interface IHeader {}

export interface IHeaderFunctions extends IHeader {}

const Header: React.FC<IHeaderFunctions> = () => {
  // if mobile
  const matches = useMediaQuery('(max-width: 767px)');
  const [enabled, setEnabled] = useState(false);
  const route = useRouter().asPath;

  useEffect(() => {
    matches ? setEnabled(false) : setEnabled(true);
  }, []);

  useEffect(() => {
    matches ? setEnabled(false) : setEnabled(true);
  }, [matches]);

  useEffect(() => {
    matches ? setEnabled(false) : setEnabled(true);
  }, [route]);

  return (
    <header className="fixed top-0 z-50 h-16 w-full border-b bg-white py-8">
      <Wrapper classes="flex justify-between items-center h-full">
        <Link href="/">
          <a className="font-sora text-xl font-bold">Finansowe Niewolnictwo</a>
        </Link>

        <Switch className="md:hidden" checked={enabled} onChange={setEnabled}>
          {!enabled ? <IconMenu2 size={32} /> : <IconX size={32} />}
        </Switch>

        {enabled ? (
          <nav className="absolute left-0 top-full z-50 flex h-[calc(100vh-4rem)] w-full flex-col items-center justify-around bg-white p-8 text-center md:static md:h-auto md:w-auto md:flex-row md:gap-x-8 md:bg-transparent md:p-0">
            <ul className="flex flex-col gap-y-8 font-publicSans text-3xl md:flex-row md:gap-x-4 md:text-lg">
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
            <ul className="flex flex-col gap-y-8 font-publicSans text-3xl md:flex-row md:gap-x-4 md:text-lg">
              <li>
                <Link href="https://www.instagram.com/finansowe_niewolnictwo/">
                  <a target="_blank" rel="noopener noreferrer">
                    <IconBrandInstagram className="scale-150 md:scale-90" size={32} />
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        ) : null}
      </Wrapper>
    </header>
  );
};

export default Header;
