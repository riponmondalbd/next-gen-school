import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between gap-4">
      {/* searchbar */}
      <div className="hidden md:flex">
        <Image
          src="/assets/nav/search.png"
          alt="search"
          width={14}
          height={14}
        />
        <input type="text" placeholder="search" />
      </div>
      {/* icons and user */}
      <div className="">icon and user</div>
    </div>
  );
}
