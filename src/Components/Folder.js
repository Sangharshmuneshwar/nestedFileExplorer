import { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setexpand] = useState(false);
  if (explorer.isFolder) {
    return (
      <>
        <span
          onClick={() => {
            setexpand(!expand);
          }}
        >
          {explorer.name}
        </span>
        <br />

        <div style={{ display: expand ? "block" : "none", padding: "15px" }}>
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} />;
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <span>{explorer.name}</span>
        <br />
      </>
    );
  }
};

export default Folder;
