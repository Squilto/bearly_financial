'use client'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";
import { signOut } from 'firebase/auth';

export function ForceLog() {
  const [user] = useAuthState(auth);
  const router = useRouter()
  const userSession = sessionStorage.getItem('user');

  console.log(userSession)
 
  if (!user && !userSession){
    router.push('/sign-in')
  }
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => {
        signOut(auth)
        sessionStorage.removeItem('user')
        router.push('/sign-in')
        }}>
        Log out
      </button>
    </main>
  )
}

const Home = ({children}) => {
  
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col m-auto items-center justify-between p-24">
      <Header></Header>
      <div className="bg-yellow-800 max-m flex-col justify-between flex-center">
        {children}
      </div>
      <button onClick={() => {
        signOut(auth)
        sessionStorage.removeItem('user')
        router.push('/sign-in')
        }}>
        Log out
      </button>
      <Footer></Footer>
    </main>
  );
}

export default Home;