import Head from 'next/head';
import { tw } from 'twind';
import Footer from '../../components/layout/Footer/Footer';
import Header from '../../components/layout/Header/Header';

export interface IMainLayout {
  children?: any;
}

export interface IMainLayoutFunctions extends IMainLayout {}

const MainLayout: React.FC<IMainLayoutFunctions> = ({ children }) => {
  const styles = {
    main: tw`mt-16`,
    footer: tw``,
  };

  return (
    <>
      <Head>
        <title>Main Layout</title>
      </Head>

      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export const getMainLayout = (page: any) => <MainLayout>{page}</MainLayout>;

export default MainLayout;
