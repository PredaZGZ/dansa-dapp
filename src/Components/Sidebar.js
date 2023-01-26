import React from "react";
import { Link } from "react-router-dom";
import { GoDashboard, GoCalendar, GoSettings } from "react-icons/go"
import { CiVault } from "react-icons/ci"
import { AiOutlineUser } from "react-icons/ai"

export default function Sidebar() {
    //const User = JSON.parse(sessionStorage.getItem("user"));
  return (
    <>
    <aside className="w-64 left-0 top-0 h-screen">
        <div className="px-3 py-4 overflow-y-auto bg-gray-800 h-full flex flex-col justify-between">
            <ul className="space-y-2">
                <li>
                    <Link to="/dashboard" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700">
                        <GoDashboard />
                        <span className="ml-3">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/vault" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700">
                        <CiVault />
                        <span className="ml-3">Vault</span>
                    </Link>
                </li>
                <li>
                    <Link to="/calendar" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700">
                        <GoCalendar />
                        <span className="ml-3">Calendar</span>
                    </Link>
                </li>
                <li>
                    <div className="my-3 border-t border-gray-700"></div>
                </li>
                <li>
                    <Link to="/settings" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700">
                        <GoSettings />
                        <span className="ml-3">Settings</span>
                    </Link>
                </li>

            </ul>
            <ul className="pt-4 mt-4 space-y-2 border-t border-gray-700">
                <li>
                    <div className="flex items-center p-2 text-white">
                        <AiOutlineUser />
                        <span className="ml-3">{}</span>
                    </div>
                </li>

            </ul>
        </div>
    </aside>

    </>
  );
}
