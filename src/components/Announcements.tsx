export default function Announcements() {
  return (
    <div className="bg-white p-4 rounded-md">
      {/* title nad view all */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {/* first announcement */}
        <div className="bg-nextSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem, ipsum dolor</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-2 py-1">
              2025-05-08
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At quo quia
            neque repellat debitis.
          </p>
        </div>
        {/* second announcement */}
        <div className="bg-nextPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem, ipsum dolor</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-2 py-1">
              2025-05-08
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At quo quia
            neque repellat debitis.
          </p>
        </div>
        {/* third announcement */}
        <div className="bg-nextYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem, ipsum dolor</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-2 py-1">
              2025-05-08
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At quo quia
            neque repellat debitis.
          </p>
        </div>
      </div>
    </div>
  );
}
