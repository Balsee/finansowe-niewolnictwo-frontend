import Head from 'next/head';
import Footer from '../../components/layout/Footer/Footer';
import Header from '../../components/layout/Header/Header';

export interface IMainLayout {
  children?: any;
}

export interface IMainLayoutFunctions extends IMainLayout {}

const MainLayout: React.FC<IMainLayoutFunctions> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Main Layout</title>
      </Head>

      <Header />
      <main className="mt-16">{children}</main>
      <Footer />
    </>
  );
};

export const getMainLayout = (page: any) => <MainLayout>{page}</MainLayout>;

export default MainLayout;
