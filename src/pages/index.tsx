import { tw } from 'twind';
import { NextPageWithLayout } from '../../types/page';
import { getMainLayout } from '../layouts/Main/MainLayout';

const Home: NextPageWithLayout = () => {
  const styles = {
    h1: tw`text(test center)`,
  };

  return (
    <>
      <h1 className={styles.h1}>Hello World!</h1>
    </>
  );
};

Home.getLayout = getMainLayout;

export default Home;
