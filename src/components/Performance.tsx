"use client";

import Image from "next/image";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 92, fill: "#C3EBFA" },
  { name: "Group B", value: 8, fill: "#FAE27C" },
];

export default function Performance() {
  return (
    <div className="bg-white rounded-md h-80 relative">
      {/* title and icon */}
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold">Performance</h1>
        <Image
          src={"/assets/moreDark.png"}
          alt="more dark icon"
          width={16}
          height={16}
        />
      </div>
      {/* chart */}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl font-bold">9.2</h1>
        <p className="text-sm text-gray-300">of 10 max NTS</p>
      </div>
      <h2 className="font-semibold absolute bottom-10 left-0 right-0 m-auto text-center">
        1st Semester - 2nd Semester
      </h2>
    </div>
  );
}
