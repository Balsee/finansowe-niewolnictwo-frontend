import { Switch } from '@headlessui/react';
import { IconMenu2, IconX } from '@tabler/icons';
import { useState } from 'react';
import { tw } from 'twind';
import Wrapper from '../../utils/Wrapper/Wrapper';

export interface IHeader {}

export interface IHeaderFunctions extends IHeader {}

const Header: React.FC<IHeaderFunctions> = () => {
  const [enabled, setEnabled] = useState(false);

  const styles = {
    header: {
      base: tw`fixed w-full top-0 py-4 z-10 bg-black`,

      wrapper: tw`flex justify-between items-center`,

      nav: {
        base: tw`absolute z-10 h-[calc(100vh-4rem)] w-full left-0 top-full bg-red-500 p-8 flex(& col) justify-around items-center text(center)`,
      },
    },
  };

  return (
    <header className={styles.header.base}>
      <Wrapper classes={styles.header.wrapper}>
        <div>LOGO</div>

        <Switch checked={enabled} onChange={setEnabled}>
          {!enabled ? <IconMenu2 size={32} /> : <IconX size={32} />}
        </Switch>

        {enabled ? (
          <nav className={styles.header.nav.base}>
            <ul>MENU</ul>
            <ul>SOCIALS</ul>
          </nav>
        ) : null}
      </Wrapper>
    </header>
  );
};

export default Header;
