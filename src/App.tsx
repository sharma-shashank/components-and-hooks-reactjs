import { useEffect, useMemo, useState } from "react";
import "./App.css";
import CommentsText from "./Comments";
import { comments } from "./Comments-Mock";
import useStaleRefreshHook from "./StaleRefreshCacheHook";

export default function App() {
  console.log(comments);
  useStaleRefreshHook('https://jsonplaceholder.typicode.com/posts', []);
  const [updatedComments, setUpdateComments] = useState(comments);
  const [inputValue, setInputValue] = useState('');

  // console.log(data);

  const tempComments = useMemo(() => updatedComments,[comments]);

  return (
    <div className="App">
      <h1 style={{marginBottom: '15px'}}>Comments:-</h1>
      {tempComments.length && <CommentsText comments={tempComments} setInputValue={setInputValue} setUpdateComments={setUpdateComments} inputValue={inputValue} />
}
    </div>
  );
}
