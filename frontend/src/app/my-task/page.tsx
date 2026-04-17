import { CheckSquare, Calendar, Filter } from "lucide-react";

export default function MyTasks() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <CheckSquare className="text-[#FF6B6B]" size={32} />
          My Tasks
        </h1>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
            <Filter size={16} /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
            <Calendar size={16} /> Date
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* To Do Column */}
        <div className="bg-gray-50/50 rounded-xl border border-gray-100 p-4">
          <h2 className="font-bold text-gray-700 mb-4 flex items-center justify-between">
            To Do <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">2</span>
          </h2>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-[#FF6B6B] transition-colors cursor-pointer">
              <h3 className="font-semibold text-gray-900">Design System</h3>
              <p className="text-sm text-gray-500 mt-1">Create Figma components</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-[#FF6B6B] transition-colors cursor-pointer">
              <h3 className="font-semibold text-gray-900">API Integration</h3>
              <p className="text-sm text-gray-500 mt-1">Connect Next.js to Node backend</p>
            </div>
          </div>
        </div>

        {/* In Progress Column */}
        <div className="bg-[#F0F7FF] rounded-xl border border-blue-100 p-4">
          <h2 className="font-bold text-blue-800 mb-4 flex items-center justify-between">
            In Progress <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full">1</span>
          </h2>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200 border-l-4 border-l-[#4A90E2]">
              <h3 className="font-semibold text-gray-900">Frontend UI</h3>
              <p className="text-sm text-gray-500 mt-1">Implement responsive sidebars</p>
            </div>
          </div>
        </div>

        {/* Done Column */}
        <div className="bg-[#F2FBF5] rounded-xl border border-green-100 p-4">
          <h2 className="font-bold text-green-800 mb-4 flex items-center justify-between">
            Done <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">1</span>
          </h2>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200 opacity-60">
              <h3 className="font-semibold text-gray-900 line-through">Project Setup</h3>
              <p className="text-sm text-gray-500 mt-1">Initialize git and install dependencies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
