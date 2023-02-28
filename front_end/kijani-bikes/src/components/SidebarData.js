import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
	title: "Profile",
	path: "/profile",
	icon: <AiIcons.AiOutlineUser />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Account Info",
		path: "/profile/info",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Transaction",
		path: "/profile/transaction",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "Rides",
	path: "/rides",
	icon: <IoIcons.IoIosBicycle />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Enter Current Location",
		path: "/rides/location",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: " UnlockBike",
		path: "/rides/unlock",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Enter Destination",
		path: "/rides/destination",
		icon: <IoIcons.IoIosPaper />,
	},
	{
        	title: "Dock",
        	path: "/rides/dock",
        	icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "Contact",
	path: "/contact",
	icon: <FaIcons.FaPhone />,
},
{
	title: "Trips",
	path: "/trips",
	icon: <FaIcons.FaBiking />,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Recent Trips",
		path: "/trips/recent",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Trip Rewards",
		path: "/trips/rewards",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "Settings",
	path: "/settings",
	icon: <IoIcons.IoMdSettings />,
},
];

