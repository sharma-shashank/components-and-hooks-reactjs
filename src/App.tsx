import { useEffect, useMemo, useState } from "react";
import "./App.css";
import CommentsText from "./Comments";
import { comments } from "./Comments-Mock";
import useStaleRefreshHook from "./StaleRefreshCacheHook";
import AbortApiController from "./AbortApiController";
import Crousal from "./Crousal";
import useFetch from "./Hooks/useFetch";
import InfiniteScroll from "./components/InfiniteScroll";

export default function App() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  useStaleRefreshHook(url, []);
  const [updatedComments, setUpdateComments] = useState(comments);
  const [inputValue, setInputValue] = useState('');
  const tempComments = useMemo(() => updatedComments,[comments]);
  const [page, setPage] = useState(0);
  const infiniteUrl = `https://picsum.photos/v2/list?page=${page}&limit=10`;
  const { data, reason, loading } = AbortApiController(infiniteUrl, page);

  if(!loading) { console.log('data -- ', data)};

  return (
    <div className="App">
      <h1 style={{marginBottom: '15px'}}>Comments:-</h1>
      {/* {tempComments.length && <CommentsText comments={tempComments} setInputValue={setInputValue} setUpdateComments={setUpdateComments} inputValue={inputValue} />
} */}
    {/* <Crousal /> */}
    <InfiniteScroll list={data} setPage={setPage}/>
    </div>
  );
}
