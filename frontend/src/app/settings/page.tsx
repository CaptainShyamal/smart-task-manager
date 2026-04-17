import { Shield, CreditCard, User, Bell } from "lucide-react";

export default function Settings() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-3 mb-6">
            <User className="text-[#FF6B6B]" />
            <h2 className="text-xl font-bold text-gray-800">Profile</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" defaultValue="shyamal jana" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#FF6B6B]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" defaultValue="shyamaljana023@gmail.com" disabled className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 text-gray-500 cursor-not-allowed" />
            </div>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Save Changes
            </button>
          </div>
        </div>

        {/* Premium Upgrade (SRS 3.5) */}
        <div className="bg-gradient-to-br from-[#FF6B6B] to-[#ff8e8e] rounded-xl shadow-sm p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-white" />
            <h2 className="text-xl font-bold">Premium Plan</h2>
          </div>
          <p className="text-white/90 mb-6 text-sm">
            Upgrade to premium for unlimited task categories, advanced analytics, and custom themes.
          </p>
          
          <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center">
            <h3 className="text-gray-900 font-bold mb-2">Scan to Upgrade ($9.99/mo)</h3>
            <div className="w-48 h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center mb-4 relative overflow-hidden">
              {/* Dummy QR Code representing Razorpay/Stripe integration */}
              <div className="grid grid-cols-5 grid-rows-5 gap-1 p-2 w-full h-full opacity-60">
                {Array.from({length: 25}).map((_, i) => (
                  <div key={i} className={`bg-gray-800 rounded-sm ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-0'}`}></div>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                <span className="bg-[#FF6B6B] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">QR API Loading...</span>
              </div>
            </div>
            <button className="w-full bg-[#FF6B6B] hover:bg-[#ff5252] text-white py-2 rounded-lg font-medium transition-colors">
              Pay via Razorpay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
