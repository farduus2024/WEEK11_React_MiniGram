import React from 'react';

// Use this heart icon to create the like button
import { Divide, Heart } from 'lucide-react';

export function PostCard({ username, imageUrl, caption, likes, onLike }) {
  return ( <div className="post">
    <h3>{username}</h3>
<img src={imageUrl} alt={caption} className="post-image" />
    <p>{caption}</p>
    <button onClick={onLike}>
      <Heart /> {likes} Likes
    </button>
  </div>)
    
     
}