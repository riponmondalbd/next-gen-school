"use client";

import Image from "next/image";

export default function FormModel({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  id?: number;
}) {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-nextYellow"
      : type === "update"
      ? "bg-nextSky"
      : "bg-nextPurple";
  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full cursor-pointer ${bgColor}`}
      >
        <Image src={`/assets/${type}.png`} alt="" width={16} height={16} />
      </button>
    </>
  );
}
