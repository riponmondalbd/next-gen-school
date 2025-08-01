import Image from "next/image";
import Link from "next/link";

export default function DashoboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* left navabr */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-50 p-4">
        <Link
          href={"/"}
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/assets/logo.png" alt="logo" width={35} height={35} />
          <span className="hidden lg:block">Next Gen</span>
        </Link>
      </div>
      {/* right content */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-50">
        r{children}
      </div>
    </div>
  );
}
