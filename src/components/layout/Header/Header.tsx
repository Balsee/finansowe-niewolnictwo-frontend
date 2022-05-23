import { Switch } from '@headlessui/react';
import { IconBrandInstagram, IconMenu2, IconX } from '@tabler/icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { tw } from 'twind';
import Wrapper from '../../utils/Wrapper/Wrapper';

export interface IHeader {}

export interface IHeaderFunctions extends IHeader {}

const Header: React.FC<IHeaderFunctions> = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setEnabled(true);
      } else {
        setEnabled(false);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    header: {
      base: tw`fixed w-full top-0 py-4 z-10 bg-[#121212] h-16`,

      wrapper: tw`flex justify-between items-center h-full`,

      logo: tw`font(sora bold) text(xl)`,
      switch: tw`md:hidden`,
      nav: {
        base: tw`absolute z-10 h-[calc(100vh-4rem)] w-full left-0 top-full bg-[#121212] p-8 flex(& col) justify-around items-center text(center) md:(static w-auto h-auto bg-transparent p-0 flex-row gap-x-8) `,

        list: tw`flex(& col) font(publicSans) text(3xl) gap-y-8 md:(text(lg) flex(row) gap-x-4)`,
        icon: tw`scale-150 md:(scale-90)`,
      },
    },
  };

  return (
    <header className={styles.header.base}>
      <Wrapper classes={styles.header.wrapper}>
        <div className={styles.header.logo}>Finansowe Niewolnictwo</div>

        <Switch className={styles.header.switch} checked={enabled} onChange={setEnabled}>
          {!enabled ? <IconMenu2 size={32} /> : <IconX size={32} />}
        </Switch>

        {enabled ? (
          <nav className={styles.header.nav.base}>
            <ul className={styles.header.nav.list}>
              <li>
                <Link href="/">
                  <a>Home</a>
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
            <ul className={styles.header.nav.list}>
              <li>
                <Link href="https://www.instagram.com/finansowe_niewolnictwo/">
                  <a target="_blank" rel="noopener noreferrer">
                    <IconBrandInstagram className={styles.header.nav.icon} size={32} />
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
