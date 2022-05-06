import Head from 'next/head';
import { tw } from 'twind';

export interface IMainLayout {
  children?: any;
}

export interface IMainLayoutFunctions extends IMainLayout {}

const MainLayout: React.FC<IMainLayoutFunctions> = ({ children }) => {
  const styles = {
    header: tw``,
    main: tw``,
    footer: tw``,
  };

  return (
    <>
      <Head>
        <title>Main Layout</title>
      </Head>

      <header className={styles.header}>Header</header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Footer</footer>
    </>
  );
};

export const getMainLayout = (page: any) => <MainLayout>{page}</MainLayout>;

export default MainLayout;
