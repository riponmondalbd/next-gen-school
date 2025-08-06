import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";

export default function ParentPage() {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* left content */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule</h1>
          {/* big calender */}
          <BigCalendar />
        </div>
      </div>
      {/* right content */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        {/* announcements */}
        <Announcements />
      </div>
    </div>
  );
}
