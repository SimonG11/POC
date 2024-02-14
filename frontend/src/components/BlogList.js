// src/components/BlogList.js
import React from 'react';

const BlogList = ({ blogs }) => {
  return (
    <ul>
      {blogs.map((blog, index) => (
        <li key={index}>{blog}</li>
      ))}
    </ul>
  );
};

export default BlogList;
