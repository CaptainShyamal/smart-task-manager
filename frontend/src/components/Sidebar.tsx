import Link from "next/link";
import { 
  LayoutDashboard, 
  AlertCircle, 
  CheckSquare, 
  List, 
  Settings, 
  HelpCircle, 
  LogOut 
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#FF6B6B] text-white flex flex-col h-screen shrink-0 relative">
      {/* Profile Section */}
      <div className="flex flex-col items-center pt-8 pb-6 border-b border-white/20">
        <div className="w-20 h-20 bg-[#FFE5E5] rounded-full flex items-center justify-center mb-3 shadow-md overflow-hidden relative">
          {/* Tree/Bonsai icon placeholder based on the mockup */}
          <div className="text-3xl">🪴</div>
        </div>
        <h2 className="font-semibold text-lg">shyamal jana</h2>
        <p className="text-xs text-white/80">shyamaljana023@gmail.com</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-4 space-y-2">
        <Link href="/" className="flex items-center gap-3 px-4 py-3 bg-white text-[#FF6B6B] rounded-lg shadow-sm font-medium transition-colors">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </Link>
        
        <Link href="/vital-task" className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors">
          <AlertCircle size={20} />
          <span>Vital Task</span>
        </Link>
        
        <Link href="/my-task" className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors">
          <CheckSquare size={20} />
          <span>My Task</span>
        </Link>
        
        <Link href="/categories" className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors">
          <List size={20} />
          <span>Task Categories</span>
        </Link>
        
        <Link href="/settings" className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors">
          <Settings size={20} />
          <span>Settings</span>
        </Link>
        
        <Link href="/help" className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors">
          <HelpCircle size={20} />
          <span>Help</span>
        </Link>
      </nav>

      {/* Logout */}
      <div className="p-4 mb-4">
        <button className="flex items-center gap-3 px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors w-full">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
