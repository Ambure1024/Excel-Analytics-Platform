import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import DashboardHome from './pages/DashboardHome';

function App() {
  return (
    <>
      <Sidebar />
      <Topbar />
      <DashboardHome />
    </>
  );
}

export default App;
