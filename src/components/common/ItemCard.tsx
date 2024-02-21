import { CiHeart } from 'react-icons/ci';
import { FaMotorcycle } from 'react-icons/fa';
import { TbLocationFilled } from 'react-icons/tb';
import InfoPill from './InfoPill';
import { IoShareSocial } from 'react-icons/io5';

const ItemCard = ({ data }: { data: Record<string, any> }) => {
  return (
    <article className="bg-transparent w-full px-7 md:py-3.5 max-w-3xl min-h-28 relative border-b border-zinc-100 flex justify-between items-center gap-4">
      <div className="space-y-[0.6575rem]">
        <h3 className="text-neutral-800 text-lg font-medium">{data.name}</h3>
        <div className="flex gap-2 sm:gap-[0.8125rem] items-center text-neutral-600 text-sm ">
          {data.time && (
            <div className="flex gap-1 items-center">
              <TbLocationFilled />
              {data.time}
            </div>
          )}
          <div className="w-[4.75px] h-[4.75px] bg-primary-10 rounded-full"></div>
          <span>{data.location}</span>
          <div className="w-[4.75px] h-[4.75px] bg-primary-10 rounded-full"></div>
          <span>{data.type}</span>
        </div>
        <div className="flex items-center gap-1.5">
          {(data.extras as Record<string, any>[]).map((item, i) => (
            <InfoPill key={i} item={item} />
          ))}
        </div>
      </div>
      <div className="flex items-start gap-[1.5625rem] text-primary-10 text-xs font-semibold cursor-pointer">
        <div className="flex flex-col items-center">
          <div>
            <CiHeart className="text-2xl" />
          </div>
          <span>1.5k</span>
        </div>

        <div>
          <IoShareSocial className="text-2xl" />
        </div>
      </div>
    </article>
  );
};

export default ItemCard;