import { MouseEventHandler } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

type Props = { pathname: string; callBack: MouseEventHandler };

const InnerHeader = ({ pathname, callBack }: Props) => {
  return (
    <h2 className="px-6 flex gap-[0.44rem] text-primary-40 font-semibold text-2xl items-center">
      <FaArrowLeft onClick={callBack} />
      {pathname.charAt(0).toLocaleUpperCase() + pathname.slice(1)}
    </h2>
  );
};

export default InnerHeader;
