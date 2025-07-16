import UserCard from "@/components/UserCard";

export default function AdminPage() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* left side of main content */}
      <div className="w-full lg:w-2/3">
        {/* user cards */}
        <div className="">
          <UserCard type="" />
        </div>
      </div>
      {/* right side of main content  */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
}
