import React from "react";
import { NavLink } from "react-router-dom";
import { GoDashboard, GoCalendar, GoSettings } from "react-icons/go"
import { CiVault } from "react-icons/ci"
import { AiOutlineUser } from "react-icons/ai"
import { useSelector } from "react-redux";

export default function Sidebar() {

    const { userInfo } = useSelector((state) => state.auth)
    
    let activeClassName = "flex items-center p-2 rounded-lg text-white bg-gray-700";
    let notactiveClassName = "flex items-center p-2 rounded-lg text-white hover:bg-gray-700";

  return (
    <>
    <aside className="w-64 left-0 top-0 h-screen">
        <div className="px-3 py-4 overflow-y-auto bg-gray-800 h-full flex flex-col justify-between">
            <ul className="space-y-2">
                <li>
                    <NavLink to="/dashboard" className={({ isActive }) =>
                        isActive ? activeClassName : notactiveClassName
                    }>
                        <GoDashboard />
                        <span className="ml-3">Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/vault" className={({ isActive }) =>
                        isActive ? activeClassName : notactiveClassName
                    }>
                        <CiVault />
                        <span className="ml-3">Vault</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/calendar" className={({ isActive }) =>
                        isActive ? activeClassName : notactiveClassName
                    }>
                        <GoCalendar />
                        <span className="ml-3">Calendar</span>
                    </NavLink>
                </li>
                <li>
                    <div className="my-3 border-t border-gray-700"></div>
                </li>
                <li>
                    <NavLink to="/settings" className={({ isActive }) =>
                        isActive ? activeClassName : notactiveClassName
                    }>
                        <GoSettings />
                        <span className="ml-3">Settings</span>
                    </NavLink>
                </li>

            </ul>
            <ul className="pt-4 mt-4 space-y-2 border-t border-gray-700">
                <li>
                    <div className="flex items-center p-2 text-white">
                        <AiOutlineUser />
                        <span className="ml-3">{userInfo.name}</span>
                    </div>
                </li>

            </ul>
        </div>
    </aside>

    </>
  );
}
