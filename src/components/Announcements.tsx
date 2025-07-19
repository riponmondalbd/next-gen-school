export default function Announcements() {
  return (
    <div className="bg-white p-4 rounded-md">
      {/* text and button */}
      <div className="flex items-center justify-between">
        {/* text */}
        <h1 className="text-xl font-semibold">Announcements</h1>
        {/* button */}
        <span className="text-xs text-gray-400">View All</span>
      </div>
      {/* announce content */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-nextSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-19-07
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            repellendus illum quam autem sit possimus debitis
          </p>
        </div>
        <div className="bg-nextPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-19-07
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            repellendus illum quam autem sit possimus debitis
          </p>
        </div>
        <div className="bg-nextYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-19-07
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            repellendus illum quam autem sit possimus debitis
          </p>
        </div>
      </div>
    </div>
  );
}
