'use client'
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
    const router = useRouter()
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
                    <Link href="/finances">
                        Financial Calculator
                    </Link>
                    <button onClick={() => {
                        router.push('/finances')
                     }}>
                        Fincal2
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;