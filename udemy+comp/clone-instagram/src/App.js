import React, { useEffect, useState } from "react";
import "./App.css";
import Post from "./component/Post";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "vijay.narola",
      caption: "This post is a awesome post",
      imageUrl: "/image/post1.jpg",
    },
    {
      id: 2,
      username: "akhil_bhuva",
      caption: "Wow, amazing",
      imageUrl: "/image/post2.jpg",
    },
    {
      id: 3,
      username: "deep__sorthiya",
      caption: "Wow,its works",
      imageUrl: "/image/post3.jpg",
    },
  ]);

  // useEffect((snapshot) => {
  //   db.collection("posts").onSnapshot(snapshot);
  // }, []);

  return (
    <div className="app">
      {/* Header */}
      <div className="app__header">
        <img
          src="/image/logo1.png"
          alt="instagram-image"
          className="app__headerImage"
        />
        <h1 className="app__headerText">instagram</h1>
      </div>
      <h3>
        Hello and Welcome to instagram,
        <br /> Your account has been loged in.
      </h3>
      {/* posts */}
      <Post posts={posts} />

      {/* posts */}
    </div>
  );
}

export default App;
