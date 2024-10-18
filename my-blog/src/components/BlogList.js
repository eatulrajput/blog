import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import postsData from '../data/posts'; // Import the posts from the JS file

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Load the posts from the JS object
    setPosts(postsData);
    console.log(postsData); // Log the postsData
  }, []);

  console.log(posts); // Log the posts state

  return (
    <div>
      <h1>Blog Posts</h1>
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id} className="blog-post">
            <p><strong>Author:</strong> {post.author}</p>
            <h2>{post.title}</h2>
            <img src={post.image} alt={post.title} className="blog-image" /> {/* Display the image */}
            <p>{post.body}</p>
            <Link to={`/post/${post.id}`}>Read More</Link>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default BlogList;
