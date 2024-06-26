import { MouseEventHandler } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

type Props = { pathname: string; callBack: MouseEventHandler };

const InnerHeader = ({ pathname, callBack }: Props) => {
  return (
    <button
      onClick={callBack}
      className="hidden px-6 md:flex gap-[0.44rem] text-primary-40 font-semibold text-2xl items-center"
    >
      <FaArrowLeft />
      {pathname.charAt(0).toLocaleUpperCase() + pathname.slice(1)}
    </button>
  );
};

export default InnerHeader;
