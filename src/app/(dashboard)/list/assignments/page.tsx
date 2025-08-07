import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { assignmentsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Assignment = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Due Date",
    accessor: "dueDate",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

export default function AssignmentListPage() {
  const renderRow = (item: Assignment) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-nextPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.subject}</h3>
        </div>
      </td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.dueDate}</td>
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
        <h1 className="hidden md:block text-lg font-semibold">
          All Assignments
        </h1>
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
      <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
      {/* pagination section */}
      <Pagination />
    </div>
  );
}
