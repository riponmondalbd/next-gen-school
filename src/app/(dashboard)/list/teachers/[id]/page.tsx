import BigCalendar from "@/components/BigCalendar";
import Image from "next/image";

export default function SingleTeacherPage() {
  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row gap-4">
      {/* left content */}
      <div className="w-full xl:w-2/3">
        {/* left top-left user details */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* user info card */}
          <div className="bg-nextSky py-6 px-4 rounded-md flex-1 flex gap-4">
            {/* for image */}
            <div className="w-1/3">
              <Image
                src={
                  "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                }
                alt="avatar"
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            {/* for details */}
            <div className="w-2/3 flex flex-col justify-between gap-4">
              {/* name & description */}
              <h1 className="text-xl font-semibold">David Worner</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              </p>

              {/* other details blood, date, email and phone */}
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                {/* blood */}
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image
                    src={"/assets/blood.png"}
                    alt="blood icon"
                    width={14}
                    height={14}
                  />
                  <span>A+</span>
                </div>
                {/* date */}
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image
                    src={"/assets/date.png"}
                    alt="date icon"
                    width={14}
                    height={14}
                  />
                  <span>January 2025</span>
                </div>
                {/* mail */}
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image
                    src={"/assets/mail.png"}
                    alt="mail icon"
                    width={14}
                    height={14}
                  />
                  <span>user@gmail.com</span>
                </div>
                {/* phone */}
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image
                    src={"/assets/phone.png"}
                    alt="phone icon"
                    width={14}
                    height={14}
                  />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </div>
          {/* left top-right small card */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* card attendance*/}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] lg:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/assets/singleAttendance.png"}
                alt="single Attendance"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">99%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* card branch*/}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] lg:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/assets/singleBranch.png"}
                alt="single Branch"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>
            {/* card lesson */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] lg:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/assets/singleLesson.png"}
                alt="single Lesson"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* card class */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] lg:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/assets/singleClass.png"}
                alt="single class"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* bottom teacher's Schedule*/}
        <div className="mt-4 bg-white rounded-md p-4 h-[800]">
          <h1>Teacher&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* right content */}
      <div className="w-full xl:w-1/3">r</div>
    </div>
  );
}
