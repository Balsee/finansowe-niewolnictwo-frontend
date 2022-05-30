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
  color = 'gray-200',
  colorDark = 'white',
}) => {
  return (
    // <div
    //   className={`bg-${color} dark:bg-${colorDark}
    //     ${orientation === 'x' ? `h-[${thickness}px] w-full` : null}
    //     ${orientation === 'y' ? `w-[${thickness}px] h-full` : null}`}
    // />
    <div
      className={`${orientation === 'x' ? `h-[${thickness}px] w-full` : ''} ${
        orientation === 'y' ? `w-[${thickness}px] h-full` : ''
      } bg-${color} dark:bg-${colorDark}`}
    />
  );
};

export default Separator;
