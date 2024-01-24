import React from "react";

import {Outlet} from 'react-router-dom'
import Header from "../pages/Header";
import Sidebar from "../pages/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <aside className="w-full h-auto sticky lg:w-1/6 lg:block hidden bg-[#3A4264] p-4">
        <Sidebar />
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-[#658CA7] p-4">
          <Header />
        </header>

        <main className="flex-1 bg-[#8FD4DA] p-4 sticky">
         <Outlet/>
        </main>

        <footer className="bg-[#7F9FB5] p-4">Footer</footer>
      </div>
    </div>
  );
};

export default Dashboard;
