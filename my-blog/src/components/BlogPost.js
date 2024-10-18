// BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';
import postsData from '../data/posts'; // Import your local posts data

const BlogPost = () => {
  const { id } = useParams(); // Get the post id from the URL parameters
  const post = postsData.find(post => post.id === parseInt(id)); // Find the post based on the id

  if (!post) {
    return <h2>Post not found</h2>; // Handle the case if no post is found with the given id
  }

  return (
    <div className="blog-post-container"> {/* Add a class for styling */}
      <h2>{post.title}</h2>
      <img src={post.image} alt={post.title} className="blog-image" /> {/* Add the image */}
      <p>{post.body}</p>
      <p><strong>Author:</strong> {post.author}</p>
    </div>
  );
};

export default BlogPost;
