import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* left navbar component */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  p-4">
        {/* logo and name */}
        <Link
          href={"/"}
          className="flex items-center justify-center lg:justify-start gap-2
        "
        >
          <Image src="/assets/school.png" alt="logo" width={35} height={35} />
          <span className="hidden lg:block font-bold">NextGen</span>
        </Link>

        {/* menu  */}
        <Menu />
      </div>
      {/* right main component */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
