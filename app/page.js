import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Home = ({children}) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header></Header>
      <div>
        {children}
      </div>
      <Footer></Footer>
    </main>
  );
}

export default Home;