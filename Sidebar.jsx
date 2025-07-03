import { Home, FileBarChart2, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-purple-900 to-purple-700 text-white fixed shadow-lg">
      <div className="p-6 text-3xl font-bold border-b border-purple-600">📊 ExcelDash</div>
      <nav className="flex flex-col p-4 gap-4 text-lg">
        <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-purple-600 transition">
          <Home size={20} /> Dashboard
        </a>
        <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-purple-600 transition">
          <FileBarChart2 size={20} /> Charts
        </a>
        <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-purple-600 transition">
          <Settings size={20} /> Settings
        </a>
      </nav>
    </aside>
  );
}
