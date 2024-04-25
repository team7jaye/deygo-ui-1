type Props = {
  item: Record<string, any>;
};

const InfoPill = ({ item }: Props) => {
  return (
    <div className="min-w-[4rem] w-max h-auto bg-secondary-70 rounded-3xl flex items-center px-2.5 py-1.5">
      <item.icon className="text-secondary-50 mr-2 h-4 w-4" />
      <div className="text-secondary-60 text-xs font-medium">{item.text}</div>
    </div>
  );
};

export default InfoPill;
