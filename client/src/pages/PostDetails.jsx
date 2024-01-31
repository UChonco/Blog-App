import React from 'react'
import PostAuthor from '../components/PostAuthor'

const PostDetails = () => {
  return (
   <section className="post-detail">
    <div className="container post-detail">
      <div className="post-detail_header">
        <PostAuthor/>
      </div>
    </div>
   </section>
  )
}

export default PostDetails
