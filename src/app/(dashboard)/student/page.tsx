import Announcements from "@/components/Announcements";
import EventCalendar from "@/components/EventCalendar";

export default function StudentPage() {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* left content */}
      <div className="w-full xl:w-2/3">l</div>
      {/* right content */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
}
