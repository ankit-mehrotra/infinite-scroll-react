import React from 'react'

const Posts = ({ post }) => {
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>post Id: {post.id}</p>
        </article>
    )
}

export default Posts