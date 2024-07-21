import React from "react";

export default function Mod(props) {
  const { mods } = props;

  return (
    <>
      {mods.map((mod) => {
        return (
          <div className={`mod_${mod.Title}`} key={mod.ID}>
            <img
              src={mod.Image}
              className="modImage"
              alt={`${mod.Title} Image`}
            />
            <div className="modInfo">
              <a href="#" className="modTitle">
                {mod.Title} · <span>{mod.Proj_Type}</span>
              </a>
              <p className="modDesc">{mod.Desc}</p>
            </div>
            <button className="DownloadBtn">
              <i className="fa-solid fa-arrow-down"></i>
            </button>
          </div>
        );
      })}
    </>
  );
}
