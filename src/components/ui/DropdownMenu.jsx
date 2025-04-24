"use client"

import React from 'react';
import { dropDownItems } from '@/utils/DropdownConst';
import Link from 'next/link';

const DropdownMenu = () => {
    return (
        <div className="relative">
            <ul 
                className="flex w-[200px] h-[300px] absolute list-none text-start z-[999] flex-col top-0 overflow-y-auto overflow-x-hidden bg-blanquito"
                 
            >
                {dropDownItems.map((item, index) => {
                    return (
                        <li 
                            key={index} 
                            className="bg-beige hover:bg-cafeish transition-all duration-300 cursor-pointer"
                        >
                            <Link 
                                className="block w-full h-full no-underline text-black p-2 cursor-pointer"
                                href={item.path} 
                            >
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default DropdownMenu;