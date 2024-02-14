// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { fetchBlogs } from '../services/apiService';
import BlogList from './BlogList';

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs().then(setBlogs);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Dashboard;
