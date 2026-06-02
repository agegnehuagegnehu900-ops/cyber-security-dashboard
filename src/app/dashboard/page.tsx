export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-green-400">Security Command Center</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Security status display */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h2 className="text-gray-400">Threat Level</h2>
          <p className="text-2xl font-bold text-green-500">LOW</p>
        </div>
        
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h2 className="text-gray-400">Active Sessions</h2>
          <p className="text-2xl font-bold text-blue-500">01</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h2 className="text-gray-400">Encryption</h2>
          <p className="text-2xl font-bold text-purple-500">AES-256</p>
        </div>
      </div>
    </main>
  );
}
import Navbar from '@/components/Navbar';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-green-400">Security Command Center</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Security status display */}
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
            <h2 className="text-gray-400">Threat Level</h2>
            <p className="text-2xl font-bold text-green-500">LOW</p>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
            <h2 className="text-gray-400">Active Sessions</h2>
            <p className="text-2xl font-bold text-blue-500">01</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
            <h2 className="text-gray-400">Encryption</h2>
            <p className="text-2xl font-bold text-purple-500">AES-256</p>
          </div>
        </div>
      </div>
    </main>
  );
}
