import { useState } from "react";
import Main from "./components/Main";

function App() {
  const url = "https://api.modrinth.com/v2/";

  return (
    <>
      <Main url={url} />
    </>
  );
}

export default App;
