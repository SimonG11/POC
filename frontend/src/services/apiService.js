// src/services/apiService.js
export const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blog');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      return []; // Return empty array as a fallback
    }
  };
  