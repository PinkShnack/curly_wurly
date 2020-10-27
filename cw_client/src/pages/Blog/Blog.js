import React from "react";
import "./Blog.css";
import BlogPosts from "../../components/BlogPosts"

export default function Blog() {
  return (
    <div className="Blog">
      <div className="lander">
        <h1>Blog</h1>
        <BlogPosts></BlogPosts>
        <p>Pure daycennnt Blog app</p>
      </div>
    </div>
  );
}