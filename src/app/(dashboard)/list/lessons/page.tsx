import FormModel from "@/components/FormModel";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { lessonsData, role } from "@/lib/data";
import Image from "next/image";

type Lesson = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
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
    header: "Actions",
    accessor: "actions",
  },
];

export default function LessonListPage() {
  const renderRow = (item: Lesson) => (
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
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModel table="lesson" type="update" data={item} />
              <FormModel table="lesson" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* top section */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Lessons</h1>
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
            {role === "admin" && <FormModel table="lesson" type="create" />}
          </div>
        </div>
      </div>
      {/* list of the teachers section */}
      <Table columns={columns} renderRow={renderRow} data={lessonsData} />
      {/* pagination section */}
      <Pagination />
    </div>
  );
}
