import { tw } from 'twind';

export interface ITemplate {}

export interface ITemplateFunctions extends ITemplate {}

const Template: React.FC<ITemplateFunctions> = () => {
  const styles = {
    template: tw``,
  };

  return <div className={styles.template}>Template</div>;
};

export default Template;
