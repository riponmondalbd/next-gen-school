import Image from "next/image";

export default function UserCard({ type }: { type: string }) {
  return (
    <div className="rounded-2xl odd:bg-nextPurple even:bg-nextYellow p-4 flex-1 min-w-[130px]">
      {/* date & icon */}
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-2xl text-green-600">
          2025/08
        </span>
        <Image
          src={"/assets/more.png"}
          alt="more icon"
          width={20}
          height={20}
        />
      </div>
      {/* count and type */}
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
    </div>
  );
}
