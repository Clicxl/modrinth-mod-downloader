import React, { useState } from "react";
import Mod from "./Mod";
import VersionSearch from "./VersionSearch";
import { getData } from "../utils";

export default function Main(props) {
  const [inputVal, setInputVal] = useState("");
  const [mods, setMods] = useState([]);

  const { url } = props;

  async function searchFunction(e) {
    if (e.key === "Enter") {
      const modList = await getData(url, inputVal, 5);
      setMods(await modList);
    }
  }

  const changeInputValue = (event) => {
    setInputVal(event.target.value);
  };

  return (
    <div>
      <div className="input">
        <input
          type="text"
          className="modInput"
          placeholder="Search"
          value={inputVal}
          onChange={changeInputValue}
          onKeyDown={searchFunction}
        />
        <VersionSearch />
      </div>
      <div className="mods">
        <Mod mods={mods} />
      </div>
    </div>
  );
}
