"use client"
import React from "react";


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

            <div className="text-gray flex-right">
                <ul>
                    <button href="/Finances.js">
                        <a>Financial Calculator</a>
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;