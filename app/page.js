'use client'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";
import { signOut } from 'firebase/auth';

const Home = ({children}) => {
  const [user] = useAuthState(auth);
  const router = useRouter()
  const userSession = sessionStorage.getItem('user');

  console.log(userSession)
 
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