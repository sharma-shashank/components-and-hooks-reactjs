import "./App.css";
import { FolderStruct } from "./components/FolderTree/Folder-Mock";
import { Tree } from "./components/FolderTree/FolderStruct";

export default function App() {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  return (
    <div className="App">
      <Tree struct={FolderStruct}/>
    </div>
  );
}
