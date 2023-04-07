import React from "react";
import "./post.css";
import { Avatar } from "@mui/material";

const Post = ({ posts }) => {
  return (
    <>
      {posts.map((e) => {
        return (
          <div className="post" key={e.id}>
            <div className="post__header">
              <Avatar
                className="post__avatar"
                alt={e.username}
                src={e.imageUrl}
              />
              {/* header---> avatar + user-name */}
              <h3>{e.username}</h3>
            </div>
            {/* image */}
            <img className="post__image" src={e.imageUrl} alt="Post" />
            {/* username + caption */}
            <h4 className="post__text">
              <strong>{e.username} </strong>
              {e.caption}
            </h4>
          </div>
        );
      })}
    </>
  );
};

export default Post;
