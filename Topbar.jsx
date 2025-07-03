export default function Topbar() {
  return (
    <header className="ml-64 bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <div className="text-xl font-semibold text-gray-700">
        Welcome back 👋
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600">Admin</div>
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Admin"
          className="w-10 h-10 rounded-full object-cover border-2 border-purple-600"
        />
      </div>
    </header>
  );
}
