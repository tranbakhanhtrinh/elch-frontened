"use client";
import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import DropDownListUser from "./DropDownListUser";

const Header = () => {
    return (
        <header className="flex justify-between items-center w-full	bg-white shadow shadow-black-50 py-6 px-6">
            <h1 className="font-bold">LOGO</h1>
            <DropDownListUser />
        </header>
    );
};

export default Header;
