import Navbar from '@/components/Navbar';
import SecurityChart from '@/components/SecurityChart';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <div className="p-4 md:p-8"> {/* ስልኩ ላይ ትንሽ፣ ኮምፒውተር ላይ ሰፊ ፓዲንግ */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-green-400">
          Security Command Center
        </h1>
        
        {/* Statistics Grid - ሁለቱንም ስክሪኖች የሚመጥን */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
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

        {/* Security Chart */}
        <SecurityChart />
      </div>
    </main>
  );
}

