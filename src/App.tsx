import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        {/* pt-16 offsets content below the fixed navbar */}
        {/* rest of your sections go here */}
      </main>
    </div>
  );
}

export default App;