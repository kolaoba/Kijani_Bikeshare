import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Reserve Bike",
    path: "/reserve",
    icon: <AiIcons.AiOutlineSelect />,
    cName: "nav-text",
  },
  {
    title: "Rides",
    path: "/rides",
    icon: <IoIcons.IoIosBicycle />,
    cName: "nav-text",
  },
  {
    title: "Payment",
    path: "/payment",
    icon: <FaIcons.FaMoneyBill />,
    cName: "nav-text",
  },
  {
    title: "Trips",
    path: "/trips",
    icon: <FaIcons.FaRoad />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <AiIcons.AiFillProfile />,
    cName: "nav-text",
  },
  {
    title: "Unlock",
    path: "/unlock",
    icon: <FaIcons.FaUnlock />,
    cName: "nav-text",
  },

  {
    title: "Settings",
    path: "/settings",
    icon: <IoIcons.IoMdSettings />,
    cName: "nav-text",
  },
];
