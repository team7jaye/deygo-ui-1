type Props = {
  item: Record<string, any>;
};

const InfoPill = ({ item }: Props) => {
  return (
    <div className="min-w-[4rem] w-max h-auto bg-primary-10/[11%] rounded-3xl flex items-center px-2.5 py-1.5">
      <item.icon className="text-primary-10 mr-2 h-4 w-4" />
      <div className="text-primary-10 text-xs font-medium font-['Mona Sans']">
        {'Text'}
      </div>
    </div>
  );
};

export default InfoPill;
