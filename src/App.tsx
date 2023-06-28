import { useEffect, useMemo, useState } from "react";
import "./App.css";
import CommentsText from "./Comments";
import { comments } from "./Comments-Mock";
import useStaleRefreshHook from "./StaleRefreshCacheHook";
import AbortApiController from "./AbortApiController";

export default function App() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  useStaleRefreshHook(url, []);
  const [updatedComments, setUpdateComments] = useState(comments);
  const [inputValue, setInputValue] = useState('');
  const tempComments = useMemo(() => updatedComments,[comments]);

  return (
    <div className="App">
      <h1 style={{marginBottom: '15px'}}>Comments:-</h1>
      {tempComments.length && <CommentsText comments={tempComments} setInputValue={setInputValue} setUpdateComments={setUpdateComments} inputValue={inputValue} />
}
    </div>
  );
}
