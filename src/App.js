import "./index.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  // const person = { id: 2, name: "omar" };
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
