import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Repair from "./components/Repair";

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Products />
      <Repair />
      <About />
      <Contact />
      <footer className='text-center bg-yellow-200 font-semibold'>
        &copy; Arkon Technologies and Services - 2025
      </footer>
    </div>
  );
}

export default App;
