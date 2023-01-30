import React from "react";
import { NavLink } from "react-router-dom";

import { GoDashboard, GoCalendar, GoSettings } from "react-icons/go";
import { MdFitnessCenter } from "react-icons/md";
import { CiLogout, CiVault } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../Slices/AuthSlice"

export default function Sidebar() {

    const { userInfo } = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    
    let activeClassName = "flex items-center p-2 rounded-lg text-white bg-zinc-700";
    let notactiveClassName = "flex items-center p-2 rounded-lg text-white hover:bg-zinc-700";

    const handleLogout = () => {
        dispatch(Logout());
    }

  return (
    <>
    <aside className="w-1/7 shadow">
        <div className="px-3 py-4 overflow-y-auto bg-zinc-800 h-full flex flex-col justify-between">
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
                    <NavLink to="/fitness" className={({ isActive }) =>
                        isActive ? activeClassName : notactiveClassName
                    }>
                        <MdFitnessCenter />
                        <span className="ml-3">Fitness</span>
                    </NavLink>
                </li>
                <li>
                    <div className="my-3 border-t border-zinc-700"></div>
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
            <ul className="pt-4 mt-4 space-y-2 border-t border-zinc-700">
                <li>
                    <div className="flex justify-between">
                        <div className="flex items-center p-2 text-white">
                            <AiOutlineUser />
                            <span className="ml-3">{userInfo.name}</span>
                        </div>
                        <div className="flex items-center p-2 text-white">
                            <CiLogout onClick={handleLogout} className="cursor-pointer" />
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    </aside>

    </>
  );
}
