import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashoboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* left navabr content*/}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        {/* logo and title */}
        <Link
          href={"/"}
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/assets/logo.png" alt="logo" width={35} height={35} />
          <span className="hidden lg:block">Next Gen</span>
        </Link>

        {/* menu detials */}
        <Menu />
      </div>

      {/* right main content */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
