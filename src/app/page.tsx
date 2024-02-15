import { GiCardboardBox } from 'react-icons/gi';

export default function Home() {
  return (
    <main className="h-full">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 items-center">
        <GiCardboardBox className="text-[6rem]" />
        <h2 className="font-semibold text-xl">No Menu Selected</h2>
        <h3 className="text-xl">
          Select an Item from the menu to view content
        </h3>
      </div>
    </main>
  );
}
