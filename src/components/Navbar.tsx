import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      {/* search bar */}
      <div className="hidden md:flex">
        <Image src={"/assets/search.png"} alt="search" width={14} height={14} />
        <input type="text" placeholder="Search..." />
      </div>
      {/* icons and user */}
      <div className="flex items-center gap-6">
        {/* message */}
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src={"/assets/message.png"}
            alt="message"
            width={20}
            height={20}
          />
        </div>

        {/* announcement */}
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image
            src={"/assets/announcement.png"}
            alt="message"
            width={20}
            height={20}
          />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-sm">
            1
          </div>
        </div>

        {/* user name & title */}
        <div className="flex flex-col">
          <span className="text-sm leading-3 font-medium">Ripon Mondal</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src={"/assets/avatar.png"}
          alt="avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
