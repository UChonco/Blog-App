import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const PostDetails = () => {
  return (
   <section className="post-detail">
    <div className="container post-detail">
      <div className="post-detail_header">
        <PostAuthor/>
        <div className="post-detail__header">
          <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
          <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
        </div>
      </div>
      <h1>Post Title</h1>
      <div className="post-detail__thumbnail">
        <img src={Thumbnail} alt="" />
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos hic nam dicta aliquid esse, earum, accusamus eum nostrum impedit ex, odit cum iusto odio quo? Laborum facere fuga accusamus numquam, porro esse repellat sequi impedit ipsum? Maiores, quidem iure.z
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto hic, repellat dolores labore sit est molestiae corrupti iusto. Officia commodi maiores unde architecto, voluptatum corporis provident voluptas quam itaque omnis cupiditate earum saepe, labore quaerat minima dolorum. Debitis eaque veritatis rem obcaecati repudiandae consequuntur in libero accusamus ullam nesciunt illo autem, cupiditate nam saepe laudantium.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, hic excepturi commodi cumque cupiditate esse eum ullam, quisquam corrupti aspernatur facere? Ad minus optio et, corporis ea reprehenderit natus vitae atque quasi earum quibusdam error nisi possimus quae hic rerum omnis explicabo quod sequi nemo veniam impedit placeat ex! Error sunt animi, ea accusantium labore ut? Quam totam maiores, soluta placeat repellat iste alias. Aliquam et dolorem quam illo sequi. Aspernatur, aliquid nesciunt eius maxime voluptatem laudantium architecto autem blanditiis vitae nemo qui alias aperiam eos necessitatibus porro. Soluta sapiente nesciunt corrupti tempora nulla repellendus corporis temporibus eos, hic odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ullam repudiandae nam ipsa, voluptas laudantium ducimus tempora inventore aut. Magni?
      </p>
    </div>
   </section>
  )
}

export default PostDetails
