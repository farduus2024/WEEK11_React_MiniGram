import React, { use } from 'react';
import { PostCard } from './PostCard';

// Import the PostCard here

export default function PostList({ posts, onLike }) {
  // This component should receive the posts and the like function as props
  // and render the PostCard component for each


  return (
    <div className="post-list">
    {posts.map(post => (
      <PostCard
        key={post.id}
        username={post.username}
        imageUrl={post.imageUrl}
        caption={post.caption}
        likes={post.likes}
        onLike={() => onLike(post.id)}

      />
    ))}
  </div>
   
  );
}