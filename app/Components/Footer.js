"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { signOut } from 'firebase/auth';

const Footer = () => {
    const [user] = useAuthState(auth);
    const router = useRouter()
//logout button+company about
    return (
        <div className="bg-yellow-950 py-2 w-full fixed bottom-0 border border-gray-600">
            <button onClick={() => {
              signOut(auth)
                sessionStorage.removeItem('user')
                sessionStorage.removeItem('email')
                router.push('/sign-in')
            }}>
            Log out
            </button>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-white text-center">Licensed and owned by Bear'N'Bear.corp</h1>
            </div>
        </div>
    );
};

export default Footer;