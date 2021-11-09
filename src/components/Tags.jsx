import React from "react";
import { Link } from "react-router-dom";

export default function Tags() {
  return (
    <div className="nav tag-cloud">
      <Link to="/blog-post-2">Machine Learning</Link>
      <Link to="/blog-post-4">Data Visualization</Link>
      <Link to="/blog-post-1">Human Factors</Link>
      <Link to="/blog-post-5">Ergonomics</Link>
      <Link to="/blog-post-2">Web Dev</Link>
      <Link to="/blog-post-3">Chatbots</Link>
      <Link to="/blog-post-6">Database Management</Link>
    </div>
  );
}
