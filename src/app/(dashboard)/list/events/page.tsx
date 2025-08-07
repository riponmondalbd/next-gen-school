import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { eventsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Event = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Start Time",
    accessor: "startTime",
    className: "hidden md:table-cell",
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

export default function EventListPage() {
  const renderRow = (item: Event) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-nextPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.title}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td className="hidden md:table-cell">{item.endTime}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-nextSky cursor-pointer">
              <Image
                src={"/assets/edit.png"}
                alt="edit icon"
                width={16}
                height={16}
              />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-nextPurple cursor-pointer">
              <Image
                src={"/assets/delete.png"}
                alt="view icon"
                width={16}
                height={16}
              />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* top section */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Events</h1>
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
            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-nextYellow">
                <Image
                  src={"/assets/plus.png"}
                  alt="plus icon"
                  width={14}
                  height={14}
                />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* list of the teachers section */}
      <Table columns={columns} renderRow={renderRow} data={eventsData} />
      {/* pagination section */}
      <Pagination />
    </div>
  );
}
