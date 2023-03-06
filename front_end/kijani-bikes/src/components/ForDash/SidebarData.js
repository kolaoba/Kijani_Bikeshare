import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
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
    title: "Ride",
    path: "/ride",
    icon: <FaIcons.FaBicycle />,
    cName: "nav-text",
  },
  {
    title: "Dock",
    path: "/dock",
    icon: <FaIcons.FaDocker />,
    cName: "nav-text",
  },
  {
    title: "Trips",
    path: "/trips",
    icon: <FaIcons.FaRoad />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
