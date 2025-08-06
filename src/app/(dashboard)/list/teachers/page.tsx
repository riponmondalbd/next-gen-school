import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";

export default function TeacherListPage() {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* top section */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          {/* search box */}
          <TableSearch />
          {/* all filters */}
          <div className="flex items-center gap-4 self-end md:self-auto">
            {/* filter */}
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-nextYellow">
              <Image
                src={"/assets/filter.png"}
                alt="filter icon"
                width={14}
                height={14}
              />
            </button>

            {/* sort */}
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-nextYellow">
              <Image
                src={"/assets/sort.png"}
                alt="sort icon"
                width={14}
                height={14}
              />
            </button>

            {/* plus */}
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-nextYellow">
              <Image
                src={"/assets/plus.png"}
                alt="plus icon"
                width={14}
                height={14}
              />
            </button>
          </div>
        </div>
      </div>
      {/* list of the teachers section */}
      <div className=""></div>
      {/* pagination section */}
      <Pagination />
    </div>
  );
}
