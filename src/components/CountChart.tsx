"use client";
import Image from "next/image";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "40-49",
    uv: 8.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "50+",
    uv: 2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "unknow",
    uv: 6.67,
    pv: 4800,
    fill: "#ffc658",
  },
];

export default function CountChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image
          src={"/assets/moreDark.png"}
          alt="more dark icon"
          width={20}
          height={20}
        />
      </div>
      {/* chart */}
      <div className="">
        {/* <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="80%"
            barSize={10}
            data={data}
          >
            <RadialBar
              minAngle={15}
              label={{ position: "insideStart", fill: "#fff" }}
              background
              clockWise
              dataKey="uv"
            />
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={style}
            />
          </RadialBarChart>
        </ResponsiveContainer> */}
      </div>
      {/* bottom */}
      <div className="flex justify-center gap-16">
        {/* for boys */}
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-nextSky rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-sm text-gray-300">Boys (55%)</h2>
        </div>
        {/* for girls */}
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-nextYellow rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-sm text-gray-300">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
}
