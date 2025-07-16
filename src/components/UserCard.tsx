import Image from "next/image";

export default function UserCard({ type }: { type: string }) {
  return (
    <div className="rounded-2xl odd:bg-nextPurple even:bg-nextYellow p-4 flex-1 min-w-[130px]">
      <div className="">
        <span>2025/17</span>
        <Image
          src={"/assets/admin/more.png"}
          alt="more"
          width={20}
          height={20}
        />
      </div>
      <h1>1,2345</h1>
      <h2>{type}</h2>
    </div>
  );
}
