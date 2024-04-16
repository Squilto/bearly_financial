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
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      </div>
      <h1>Welcome to Bearly Financial, your firendly neighborhood Bear you can Bank on!</h1>
      <button onClick={() => {
        signOut(auth)
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('email')
        router.push('/sign-in')
        }}>
        Log out
      </button>
    </main>
  );
}

export default Home;