import { List, Folder, Briefcase, Heart, Book, Plus } from "lucide-react";

export default function Categories() {
  const categories = [
    { name: "Work", icon: <Briefcase size={24} />, count: 12, color: "bg-blue-100 text-blue-600" },
    { name: "Personal", icon: <User size={24} />, count: 5, color: "bg-green-100 text-green-600" },
    { name: "Health", icon: <Heart size={24} />, count: 3, color: "bg-red-100 text-red-600" },
    { name: "Education", icon: <Book size={24} />, count: 8, color: "bg-purple-100 text-purple-600" },
    { name: "Other", icon: <Folder size={24} />, count: 2, color: "bg-gray-100 text-gray-600" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <List className="text-[#FF6B6B]" size={32} />
          Task Categories
        </h1>
        <button className="bg-[#FF6B6B] hover:bg-[#ff5252] text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors">
          <Plus size={16} />
          New Category
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer group">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${cat.color}`}>
                {cat.icon}
              </div>
              <span className="text-2xl text-gray-300 group-hover:text-[#FF6B6B] transition-colors">
                &rarr;
              </span>
            </div>
            <h2 className="text-xl font-bold text-gray-800">{cat.name}</h2>
            <p className="text-gray-500 mt-1">{cat.count} Tasks</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Temporary inline icon for missing import
function User({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
}
