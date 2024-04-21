import fishes from "./components/Fishes/fishes.json";
import Fishes from "./components/Fishes/Fishes.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import NavBarItems from "./components/NavBar/NavBarItems/NavBarItems.jsx";

function App() {
  return (
    <div className="App">
      <NavBar>
        <NavBarItems title="Home" />
        <NavBarItems title="Fishes" />
        <NavBarItems title="About" />
        <NavBarItems title="Contact" />
      </NavBar>
      <Fishes fishes={fishes} />
    </div>
  );
}

export default App;