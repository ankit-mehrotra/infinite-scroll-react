import React, { useRef, useState, useCallback } from 'react'
import { usePosts } from './hooks/usePosts'
import Post from "./InfiniteScroll/Post";

const Example1 = () => {
    const [pageNum, setPageNum] = useState(1);
    const { isError, error, results, hasNextPage, isLoading } = usePosts(pageNum);

    const intersectObserver = useRef();
    const lastPostRef = useCallback(post => {
        if (isLoading) return;
        if (intersectObserver.current) intersectObserver.current.disconnect();
        intersectObserver.current = new IntersectionObserver(posts => {
            if (posts[0].isIntersecting && hasNextPage) {
                setPageNum(prev => prev + 1)
            }
        })
        if (post) {
            intersectObserver.current.observe(post)
        }
    }, [isLoading, hasNextPage])
    const content = results.map((post, indx) => {
        if (results.length === indx + 1) {
            return <Post key={post.id} post={post} ref={lastPostRef} />
        }
        return <Post key={post.id} post={post} />
    })
    if (isError) return <p className='center'>Error Message : {error.message}</p>
    return (
        <div>
            <h1 id="top">&infin; Infinite query&amp;Scroll <br />&infin; Ex1- reactonly</h1>
            {isLoading && <div className='center'>Loading more Posts</div>}
            {content}
            <p><a href="#top">Move to top</a></p>
        </div>
    )
}

export default Example1