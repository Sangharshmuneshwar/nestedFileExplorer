import Folder from "./Components/Folder";
import "./styles.css";
import explorer from "./data/filedata";

export default function App() {
  return (
    <div>
      <Folder explorer={explorer} />
    </div>
  );
}
