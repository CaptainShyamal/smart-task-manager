import { HelpCircle, Mail, MessageSquare, FileText } from "lucide-react";

export default function Help() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help you?</h1>
        <div className="max-w-xl mx-auto relative">
          <input 
            type="text" 
            placeholder="Search knowledge base..." 
            className="w-full bg-white border border-gray-200 rounded-full px-6 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:border-[#FF6B6B] transition-colors cursor-pointer">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText size={24} />
          </div>
          <h2 className="font-bold text-gray-900 mb-2">Documentation</h2>
          <p className="text-sm text-gray-500">Browse our detailed guides and tutorials.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:border-[#FF6B6B] transition-colors cursor-pointer">
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare size={24} />
          </div>
          <h2 className="font-bold text-gray-900 mb-2">Live Chat</h2>
          <p className="text-sm text-gray-500">Chat with our support team instantly.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:border-[#FF6B6B] transition-colors cursor-pointer">
          <div className="w-12 h-12 bg-red-50 text-[#FF6B6B] rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail size={24} />
          </div>
          <h2 className="font-bold text-gray-900 mb-2">Email Support</h2>
          <p className="text-sm text-gray-500">Send us an email and we'll reply in 24h.</p>
        </div>
      </div>
    </div>
  );
}
