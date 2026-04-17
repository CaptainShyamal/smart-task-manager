import { Search, Bell, Calendar } from "lucide-react";

export default function Header() {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 shrink-0">
      {/* Logo Text */}
      <div className="text-2xl font-bold tracking-tight">
        <span className="text-[#FF6B6B]">Dash</span>
        <span className="text-gray-800">board</span>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-xl mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search your task here..." 
            className="w-full bg-gray-50 text-sm rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#FF6B6B] transition-all"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#FFE5E5] text-[#FF6B6B] hover:bg-[#ffdbdb] transition-colors">
          <Bell size={18} />
        </button>
        
        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#FFE5E5] text-[#FF6B6B] hover:bg-[#ffdbdb] transition-colors">
          <Calendar size={18} />
        </button>
        
        <div className="text-right ml-2 mr-4">
          <div className="text-sm font-semibold text-gray-800">Friday</div>
          <div className="text-xs text-gray-400">04/17/2026</div>
        </div>
      </div>
    </header>
  );
}
