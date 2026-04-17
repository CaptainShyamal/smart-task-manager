import { Plus, MoreVertical, Circle } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          Welcome, shyamal jana 
          <span className="text-2xl">👋</span>
        </h1>
        {/* Placeholder for the top right bonsai/tree icon if needed, though it's in the profile normally */}
        <div className="w-10 h-10 bg-[#FFE5E5] rounded-full flex items-center justify-center shadow-sm">
          <span className="text-lg">🪴</span>
        </div>
      </div>

      {/* To Do List Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">To Do</h2>
          <button className="bg-[#FF6B6B] hover:bg-[#ff5252] text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors">
            <Plus size={16} />
            Add Task
          </button>
        </div>
        
        <div className="p-6">
          {/* Task Item */}
          <div className="flex items-start justify-between border border-gray-100 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <button className="mt-1 text-[#4A90E2] hover:text-blue-600">
                <Circle size={20} />
              </button>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Take Bath</h3>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-1 text-gray-500">
                    Priority: <span className="text-red-500 font-medium">Extreme</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    Status: <span className="text-[#4A90E2] font-medium">In Progress</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    Created on: <span className="text-gray-600">2027-09-01</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600 p-1">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Task Stats Section */}
      <div className="bg-[#FAFAFA] rounded-xl shadow-sm border border-gray-100 p-8 text-center mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Task Stats</h2>
        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          <div className="flex justify-between items-center text-gray-700">
            <span>Completed:</span>
            <span className="font-semibold">0%</span>
          </div>
          <div className="flex justify-between items-center text-gray-700">
            <span>In Progress:</span>
            <span className="font-semibold">100%</span>
          </div>
          <div className="flex justify-between items-center text-gray-700">
            <span>Not Started:</span>
            <span className="font-semibold">0%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
