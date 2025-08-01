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
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src={"/assets/announcement.png"}
            alt="message"
            width={20}
            height={20}
          />
        </div>

        {/* user name & title */}
      </div>
    </div>
  );
}
