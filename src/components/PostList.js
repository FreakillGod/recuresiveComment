import React, { useEffect, useState } from "react";
import { getPosts } from "../services/posts";
import { Link } from "react-router-dom"

const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((res) => setPosts(res));
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <h1 key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h1>
        );
      })}
    </div>
  );
};

export default PostList;
