import React, { useReducer, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "../reducers";
import Event from "./Event";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    console.log(state);
    e.preventDefault();
    console.log({ title, body });
    dispatch({
      type: "CREATE_EVENT",
      title,
      body,
    });

    setTitle("");
    setBody("");
  };

  return (
    <>
      <div className="container-fluid">
        <h4> イベント作成フォーム</h4>
        <form>
          <div className="form-group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              id="formEventTitle"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="formEventBody">body</label>
            <textarea
              className="form-control"
              id="formEventBody"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={addEvent}>
            イベントを作成する
          </button>
          　<button className="btn btn-danger">全イベントを削除する</button>
        </form>
        <br />
        <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {state.map((event, index) => (
              <Event key={index} event={event} dispatch={dispatch} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
