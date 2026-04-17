import { AlertCircle, Clock } from "lucide-react";

export default function VitalTasks() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <AlertCircle className="text-[#FF6B6B]" size={32} />
          Vital Tasks
        </h1>
      </div>

      <div className="bg-[#FFF5F5] rounded-xl shadow-sm border border-[#FFE5E5] overflow-hidden">
        <div className="p-6 border-b border-[#FFE5E5]">
          <h2 className="text-xl font-bold text-[#FF6B6B]">Urgent & Important</h2>
          <p className="text-sm text-gray-600 mt-1">Tasks requiring immediate attention.</p>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between bg-white border border-red-200 p-5 rounded-lg shadow-sm border-l-4 border-l-red-500">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Finalize SRS Documentation</h3>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1 text-red-600 font-medium">
                  <Clock size={16} /> Due in 2 hours
                </span>
                <span>Category: Project</span>
              </div>
            </div>
            <button className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-100 transition-colors">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
