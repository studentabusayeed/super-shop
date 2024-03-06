import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar2 from '../../../shared/Navbar2/Navbar2';
import { AiFillFacebook, AiFillInstagram, AiOutlineHome, AiOutlineSchedule, AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai";
import { FaUserClock } from 'react-icons/fa';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import { IoPeople } from 'react-icons/io5';
import { MdProductionQuantityLimits } from 'react-icons/md';

const AdminDashboard = ({ isSideMenuOpen, toggleSideMenu }) => {

    const navlinks = <>
        <li className="relative px-2 py-1">
            <NavLink
                defaultChecked
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="/"
            >
                <AiOutlineHome />
                <span className="ml-4">Home</span>
            </NavLink>
        </li>
        <li className="relative px-2 py-1 ">
            <NavLink
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="productList"
            >
                <MdProductionQuantityLimits />
                <span className="ml-4">Product List</span>
            </NavLink>
        </li>
        <li className="relative px-2 py-1 ">
            <NavLink
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="orderedList"
            >
                <MdProductionQuantityLimits />
                <span className="ml-4">Ordered List</span>
            </NavLink>
        </li>
        <li className="relative px-2 py-1 ">
            <NavLink
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="productStatement"
            >
                <AiOutlineSchedule />
                <span className="ml-4">Product Statement</span>
            </NavLink>
        </li>
        <li className="relative px-2 py-1 ">
            <NavLink
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="orderStatement"
            >
                <AiOutlineSchedule />
                <span className="ml-4">Order Statement</span>
            </NavLink>
        </li>
        <li className="relative px-2 py-1 ">
            <NavLink
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="membersRequest"
            >
                <FaUserClock />
                <span className="ml-4">Members Request</span>
            </NavLink>
        </li>
        <li className="relative px-2 py-1 ">
            <NavLink
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="allMembers"
            >
                <IoPeople />
                <span className="ml-4">All Members</span>
            </NavLink>
        </li>
    </>

    return (
        <div className={`flex h-screen bg-white ${isSideMenuOpen ? "overflow-hidden" : ""}`}>
            {/* Dashboard */}
            <aside className='z-20 flex-shrink-0 fixed hidden w-64 overflow-y-auto bg-white lg:block'>
                <div className='h-screen py-3 pl-3 flex flex-col justify-between shadow-xl'>
                    {/* logo */}
                    <div>
                        <h1 className="text-2xl">VIP Tailor</h1>
                    </div>
                    {/* items and routes */}
                    <div className=" flex flex-col justify-between">
                        <ul className="leading-10">
                            {navlinks}
                        </ul>
                    </div>
                    {/* social icons */}
                    <div className='flex gap-2 justify-center items-center'>
                        <AiFillFacebook className='text-2xl rounded-full text-blue-500' />
                        <AiFillInstagram className='text-2xl rounded-full text-pink-600' />
                        <AiOutlineWhatsApp className='text-2xl rounded-full text-green-500' />
                        <AiOutlineTwitter className='text-2xl rounded-full' />
                    </div>
                </div>
            </aside>
            <div className="fixed inset-0 -z-10 flex items-end bg-slate-300 bg-opacity-50 sm:items-center sm:justify-center"></div>
            {/* responsive dashboard */}
            <aside className={`z-20 fixed duration-300 w-64 inset-y-0 ease-in-out overflow-y-auto bg-white ${isSideMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}>
                <div className='h-screen py-3 pl-3 flex flex-col justify-between shadow-xl'>
                    {/* logo */}
                    <div>
                        <h1 className="text-2xl">VIP Tailor</h1>
                    </div>
                    {/* items and routes */}
                    <div className=" flex flex-col justify-between">
                        <ul className="leading-10">
                            {navlinks}
                        </ul>
                    </div>
                    {/* social icons */}
                    <div className='flex gap-2 justify-center items-center'>
                        <AiFillFacebook className='text-2xl rounded-full text-blue-500' />
                        <AiFillInstagram className='text-2xl rounded-full text-pink-600' />
                        <AiOutlineWhatsApp className='text-2xl rounded-full text-green-500' />
                        <AiOutlineTwitter className='text-2xl rounded-full' />
                    </div>
                </div>
            </aside>
            {/* components */}
            <div className="flex flex-col flex-1 w-full overflow-y-auto bg-gray-200">
                <header className="z-40 py-5 bg-slate-50 fixed w-full top-0 lg:hidden">
                    <div className="flex items-center justify-between h-8 px-6 mx-auto">
                        <button
                            className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
                            onClick={toggleSideMenu}
                            aria-label="Menu"
                        >
                            {isSideMenuOpen ? (
                                <FaXmark className="w-6 h-6" />
                            ) : (
                                <FaBarsStaggered className="w-6 h-6" />
                            )}
                        </button>
                        <div className="flex md:hidden justify-center mr-4 w-[80%]"></div>
                    </div>
                </header>
                <main className="lg:ml-72 scroll-smooth">
                    <Navbar2></Navbar2>
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;