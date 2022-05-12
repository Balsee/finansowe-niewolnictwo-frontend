import { tw } from 'twind';

export interface IWrapper {
  children: any;
  classes?: string;
}

export interface IWrapperFunctions extends IWrapper {}

const Wrapper: React.FC<IWrapperFunctions> = ({ children, classes }) => {
  const styles = {
    Wrapper: tw`max-w-7xl mx-auto px-4 sm:px-8 md:px-16`,
  };

  return <div className={`${styles.Wrapper} ${classes}`}>{children}</div>;
};

export default Wrapper;
