export interface ITemplate {}

export interface ITemplateFunctions extends ITemplate {}

const Template: React.FC<ITemplateFunctions> = () => {
  return <div className="">Template</div>;
};

export default Template;
