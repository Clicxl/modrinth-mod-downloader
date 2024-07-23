import React, { useEffect, useState } from "react";
import { getVersions } from "../utils";

export default function VersionSearch() {
  const [versions, setVersions] = useState([]);

  async function versionHandler() {
    const versionsList = (await getVersions()).filter((value, index) => {
      return value["type"] === "release" ? index : null;
    });

    const newVersionList = [];

    versionsList.forEach((version) => {
      newVersionList.push([version["id"], version["type"]]);
    });

    setVersions(await newVersionList);
  }

  useEffect(() => {
    versionHandler();
  });

  return (
    <label className="Version">
      <select className="versionSearch">
        {versions.map((version) => {
          return (
            <option value={version[0]} key={version[0]}>
              {version[0]}
            </option>
          );
        })}
      </select>
    </label>
  );
}
