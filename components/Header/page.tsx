import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const Header = () => {
    return (
        <header className="flex justify-between items-center w-full	bg-white shadow shadow-black-50 py-6 px-6">
            <h1 className="font-bold">LOGO</h1>
            <div>
                <UserCircleIcon className="h-14 w-14" />
            </div>
        </header>
    );
};

export default Header;
