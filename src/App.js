import React from "react";
import Pokemon from "./components/Pokemon";

const App = () => {
  return (
    <div className="App">
      <Pokemon pokemonId={1} />
      <Pokemon pokemonId={2} />
      <Pokemon pokemonId={3} />
      <Pokemon pokemonId={4} />
    </div>
  );
};

export default App;