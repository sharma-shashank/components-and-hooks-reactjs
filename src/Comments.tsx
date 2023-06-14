import { useState } from "react";
import "./App.css";

type ICommentsTextProps = {
  comments: Array<IComments>;
  setUpdateComments: any;
  setInputValue: any;
  inputValue: string;
};

type IComments = {
  id: any;
  text: string;
  replyBtn: string,
  likeBtn: string,
  isLiked: boolean,
  replies: Array<any>;
}

export default function CommentsText({ comments, setUpdateComments, setInputValue, inputValue }: ICommentsTextProps) {

  const submitReply = (arr: Array<any>, id: any) => {
    arr.forEach(item => {
      if (item.id === id) {
        const obj = {
          id: id  + Math.random(),
          text: inputValue,
          replyBtn: 'Reply',
          likeBtn: 'Like',
          replies: [],
        } as IComments;
        item.replies = [...item.replies, obj];
        return;
      } else {
        submitReply(item.replies, id);
      }
    });
    setUpdateComments([...comments]);
  }

  const handleChange = (ev, i, id) => {
    const value = ev.target.value;
    setInputValue(value);
  }

  return (
    <div className="comment-box">
      {comments.map((item, i) => {
        return (
          <> 
            <div className="comment-text-cont" key={item.id}>
              <div>{item.text}</div>
              <button type="button">
                {item.likeBtn}
              </button>
              <button type="button" onClick={(ev) => submitReply(comments, item.id)}>
                {item.replyBtn}
              </button>
              <input type="text" style={{width: '20%'}} onChange={(ev) => handleChange(ev, i, item.id)}/>
            </div>
            <div style={{ paddingLeft: "20px" }} key={item.id + 1}>
            {item.replies.length ? (
                <CommentsText comments={item.replies} setInputValue={setInputValue} setUpdateComments={setUpdateComments} inputValue={inputValue} />
            ) : (
              ""
            )}
            </div>
          </>
        );
      })}
    </div>
  );
}
