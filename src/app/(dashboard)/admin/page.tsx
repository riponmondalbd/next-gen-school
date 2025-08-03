import UserCard from "@/components/UserCard";

export default function AdminPage() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* left content */}
      <div className="w-full lg:w-2/3">
        {/* user cards */}
        <div className="flex gap-4 justify-between">
          <UserCard type="students" />
          <UserCard type="teachers" />
          <UserCard type="parents" />
          <UserCard type="staffs" />
        </div>
      </div>
      {/* right content */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
}
