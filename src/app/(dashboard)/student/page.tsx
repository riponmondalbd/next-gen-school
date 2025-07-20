import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import EventCalendar from "@/components/EventCalendar";

export default function StudentPage() {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* left content */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          {/* page schedule section header title */}
          <h1 className="text-xl font-semibold">Schedule (4a)</h1>
          <BigCalendar />
        </div>
      </div>

      {/* right content */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        {/* event calender */}
        <EventCalendar />
        {/* announcement */}
        <Announcements />
      </div>
    </div>
  );
}
