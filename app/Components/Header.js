'use client'
import React from "react";
import Link from "next/link";
//header image/link to main page
const Header = () => {
    return (
        <div className="bg-yellow-950 py-3 align-left max-h-[150px] fixed top-0 left-0 w-full flex-row">
            <div className="flex-left">
                <ul className="align-center p-2 m-0 flex">
                    <li>
                        <a href="/">
                        <img src="/BearlyLogo.png" alt="Bearly Logo" className="max-h-[125px]"></img>
                        </a>
                    </li>
                </ul>
            </div>
{/* link to redirecto to finances page*/}
            <div className="text-gray flex-right">
                <ul>
                    <Link href="/finances">
                        Financial Calculator
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;