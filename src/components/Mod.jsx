import React from "react";

export default function Mod(props) {
  const { mods, key } = props;

  return (
    <>
      <div className="mod_${mods[key].Title}">
        <img
          src="${mods[key].Image}"
          className="modImage"
          alt="${mods[key].Title} Image"
        />
        <div className="modInfo">
          <a href="#" className="modTitle">
            ${mods[key].Title} · <span>${mods[key].Proj_Type}</span>
          </a>
          <p className="modDesc">${mods[key].Desc}</p>
        </div>
        <button className="DownloadBtn">
          <i className="fa-solid fa-arrow-down"></i>
        </button>
      </div>
    </>
  );
}
