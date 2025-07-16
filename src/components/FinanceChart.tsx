"use client";

import Image from "next/image";

export default function FinanceChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image
          src={"/assets/admin/moreDark.png"}
          alt="more dark"
          width={20}
          height={20}
        />
      </div>
      {/* chart */}
    </div>
  );
}
