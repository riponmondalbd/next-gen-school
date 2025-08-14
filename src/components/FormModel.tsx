"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { JSX, useState } from "react";
// import StudentForm from "./forms/StudentForm";
// import TeacherForm from "./forms/TeacherForm";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});

const forms: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
};

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

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Form not found!"
    );
  };

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
            {/* modal content */}
            <Form />
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
