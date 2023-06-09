import { Menu, Transition } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Fragment } from "react";

const links = [
    { href: "/account-settings", label: "Account settings" },
    { href: "/support", label: "Support" },
    { href: "/license", label: "License" },
    { href: "/sign-out", label: "Sign out" },
];

export default function DropDownListUser() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button>
                <UserCircleIcon className="h-14 w-14" />
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute flex flex-col right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {links.map(link => (
                        /* Use the `active` state to conditionally style the active item. */
                        <Menu.Item key={link.href} as={Fragment}>
                            {({ active }) => (
                                <Link
                                    href={link.href}
                                    className={`${
                                        active
                                            ? "bg-blue-500 text-white"
                                            : "bg-white text-black"
                                    } w-full rounded-sm p-1`}
                                >
                                    {link.label}
                                </Link>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
