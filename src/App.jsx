import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";

function App() {
  return (
    <>
      <main className="bg-black">
        <Navbar/>
        <Hero/>
        <Highlights/>
        <Model/>
      </main>
    </>
  );
}

export default App;
