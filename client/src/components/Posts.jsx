import React ,{useState}from 'react'

import THumbnail1 from '../images/blog1.jpg'
import THumbnail2 from '../images/blog2.jpg'
import THumbnail3 from '../images/blog3.jpg'
import THumbnail4 from '../images/blog5.jpg'
import PostItem from './PostItem'


const DUMMY_POSTS = [
  {
    id: "1",
    thumbnail: THumbnail1,
    category: 'education',
    title: "This is title of the very first post on this blog.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reprehenderit magnam debitis accusantium laboriosam et fugit, doloremque ",
    authorID: 3,
  },
  {
    id: "2",
    thumbnail: THumbnail2,
    category: 'Science',
    title: "This is title of the very first post on this blog.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reprehenderit magnam debitis accusantium laboriosam et fugit, doloremque ",
    authorID: 1,
  },
  {
    id: "3",
    thumbnail: THumbnail3,
    category: 'Weather',
    title: "This is title of the very first post on this blog.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reprehenderit magnam debitis accusantium laboriosam et fugit, doloremque ",
    authorID: 13,
  },
  {
    id: "4",
    thumbnail: THumbnail4,
    category: 'Farming',
    title: "This is title of the very first post on this blog.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reprehenderit magnam debitis accusantium laboriosam et fugit, doloremque ",
    authorID: 11,
  },
];

const Posts = () => {
   const [posts,setPosts] = useState(DUMMY_POSTS)
  return (
    <section className="posts">
      <div className="container posts__container">
        {posts.map(
          ({ id, thumbnail, category, title, description, authorID }) => (
            <PostItem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              description={description}
              authorID={authorID}
            />
          )
        )}
      </div>
    </section>
  );
}

export default Posts
