import Halo from "./components/Halo";
import Counter from "./components/Counter";   
import Profile from "./components/Profile";   

function App() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Latihan Komponen di React (Vite)</h1>

      <Halo nama="Zalia" />
      <Halo nama="Techs" />

      <Counter />

      <Profile />
    </div>
  );
}

export default App;