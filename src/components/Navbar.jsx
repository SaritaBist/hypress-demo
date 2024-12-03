"use client"

import { TextInput} from "@mantine/core";
import { IconSearch,IconWallet,IconShoppingCart} from '@tabler/icons-react';
import { useState} from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import Logo from "@/components/Logo";


const NavbarPage=({collections})=>{

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = (data) => {
        setDropdownOpen(data);
    };


    return(
        <>
            <div className="flex gap-2 justify-around items-center mt-2 p-2 border-2 border-t-0">
                <div className="flex gap-8 items-center">
                   <Logo/>
                    <div className='flex items-center gap-1 '>
                        <IconWallet stroke={1} className='h-8 w-8'/>
                        <button
                            onMouseEnter={()=>toggleDropdown(true)}
                            onMouseLeave={()=>toggleDropdown(false)}

                            className="flex items-center gap-1 [&_button]:p-0"
                        >
                            <span className="text-black text-md font-semibold">Collections</span>
                            {dropdownOpen ? (
                                <IconChevronUp size={16} className="text-black  h-6 w-6 " />
                            ) : (
                                <IconChevronDown size={16}  className="text-black h-6 w-6"/>
                            )}
                        </button>


                        {dropdownOpen && (
                            <div className="absolute top-16 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                <ul className="py-2">
                                    {collections.map((item, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {item.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="border border-gray-500 h-6"></div>
                    <div className="flex items-center  ">
                        <TextInput
                            size="md"
                            radius="xl"
                            placeholder="What's on your mind today?"
                            className="w-[45vw] hover:border-gray-500"
                            rightSection={
                                <>
                                    <div className="border border-gray-400 h-10"></div>
                                    <button
                                        className="flex items-center gap-2 px-2 "
                                    >
                                        <IconSearch size={16} stroke={2}/>
                                        <span>Search</span>
                                    </button>
                                </>
                            }
                            rightSectionWidth={200}
                        />
                    </div>
                </div>


                <div className="flex gap-5">
                    <div className="flex gap-3">
                        <IconShoppingCart stroke={1} className="h-8 w-8"/>
                        <div className="border border-gray-500 h-6"></div>
                    </div>
                    <a href='#'>
                        Sign in
                    </a>
                    <a href='#'>
                        Sign out
                    </a>

                </div>
            </div>
            {/*<Divider className='font-semibold'/>*/}
        </>
    )
}

export default NavbarPage