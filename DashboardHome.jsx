import {
  FileBarChart2,
  Users,
  BarChartHorizontal,
} from "lucide-react";

export default function DashboardHome() {
  return (
    <main className="ml-64 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
        📈 Dashboard Overview
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-t-4 border-purple-500">
          <div className="flex items-center gap-4">
            <FileBarChart2 size={32} className="text-purple-600" />
            <div>
              <p className="text-gray-600">Total Uploads</p>
              <p className="text-2xl font-semibold text-gray-800">32</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-t-4 border-blue-500">
          <div className="flex items-center gap-4">
            <Users size={32} className="text-blue-600" />
            <div>
              <p className="text-gray-600">Active Users</p>
              <p className="text-2xl font-semibold text-gray-800">12</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-t-4 border-green-500">
          <div className="flex items-center gap-4">
            <BarChartHorizontal size={32} className="text-green-600" />
            <div>
              <p className="text-gray-600">Most Used Chart</p>
              <p className="text-2xl font-semibold text-gray-800">Bar Chart</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
