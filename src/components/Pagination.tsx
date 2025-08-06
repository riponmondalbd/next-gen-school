export default function Pagination() {
  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      {/* prev button */}
      <button
        disabled
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
      >
        Prev
      </button>
      {/* page numbers */}
      <div className="flex items-center gap-2 text-sm">
        <button className="px-2 rounded-sm bg-nextSky cursor-pointer">1</button>
        <button className="px-2 rounded-sm cursor-pointer">2</button>
        <button className="px-2 rounded-sm cursor-pointer">3</button>
        ...
        <button className="px-2 rounded-sm cursor-pointer">10</button>
      </div>

      {/* next button */}
      <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  );
}
