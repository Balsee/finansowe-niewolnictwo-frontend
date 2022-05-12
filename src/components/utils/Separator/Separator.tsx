import { tw } from 'twind';

export interface ISeparator {
  orientation?: string;
  thickness?: number;
  color?: string;
  colorDark?: string;
}

export interface ISeparatorFunctions extends ISeparator {}

const Separator: React.FC<ISeparatorFunctions> = ({
  orientation = 'x',
  thickness = 1,
  color = 'black',
  colorDark = 'white',
}) => {
  const styles = {
    separator: tw`
      bg(${color} dark:(${colorDark}))
      ${orientation === 'x' ? `h-[${thickness}px] w-full` : null}
      ${orientation === 'y' ? `w-[${thickness}px] h-full` : null}
      opacity-50
    `,
  };

  return <div className={styles.separator} />;
};

export default Separator;
