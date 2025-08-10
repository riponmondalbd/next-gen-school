"use client";

import Image from "next/image";
import { useState } from "react";

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

  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full cursor-pointer ${bgColor}`}
        // trigger modal
        onClick={() => setOpen(true)}
      >
        <Image src={`/assets/${type}.png`} alt="" width={16} height={16} />
      </button>

      {/* modal */}
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white rounded-md p-4 relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            {/* close modal icon button */}
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/assets/close.png"
                alt={"close icon"}
                width={14}
                height={14}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
