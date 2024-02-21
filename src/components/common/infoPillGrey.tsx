import { classNames } from '@/utils/functions';

type Props = {
  text: string;
  active?: boolean;
};

const InfoPillGrey = ({ text, active }: Props) => {
  return (
    <div
      className={classNames(
        active
          ? 'bg-secondary-10 text-white'
          : 'bg-secondary-20 text-secondary-30',
        'hover:bg-secondary-10 hover:text-white min-w-[7.625rem] w-max h-auto rounded-3xl px-2.5 py-1.5 text-center text-base'
      )}
    >
      <span>{text}</span>
    </div>
  );
};

export default InfoPillGrey;
