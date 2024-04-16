'use client'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";
import { signOut } from 'firebase/auth';


const Home = () => {
  const [user] = useAuthState(auth);
  const router = useRouter()
  const userSession = sessionStorage.getItem('user');
  const emailHold = sessionStorage.getItem('email');

  console.log(userSession)
  console.log(emailHold)
   if (!user && !userSession){
    router.push('/sign-in')
  }
  //THE FIRST DIV IS LOAD BEARING, DO NOT REMOVE
  //basic main page
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      </div>
      greeting, please click financial calculator to begin
      <div></div>
    </main>
  );
}

export default Home;