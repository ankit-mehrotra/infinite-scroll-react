import React from 'react'
import Posts from './Posts';

const ListPage = ({ searchResults }) => {
    const results = searchResults.map(post => <Posts key={post.id} post={post} />)
    const content = results?.length ? results : <article><p>No Matching posts</p></article>
    return (
        <main>{content}</main>
    )
}

export default ListPage