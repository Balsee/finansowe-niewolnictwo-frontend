export interface IWrapper {
  children: any;
  classes?: string;
}

export interface IWrapperFunctions extends IWrapper {}

const Wrapper: React.FC<IWrapperFunctions> = ({ children, classes }) => {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-8 md:px-16 ${classes}`}>{children}</div>;
};

export default Wrapper;
