import React from 'react'

const SearchFilter = ({ posts, setSearchResults }) => {

    const handleSearch = (e) => {
        if (!e.target.value) return setSearchResults(posts);

        const results = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))
        setSearchResults(results);
    }
    return (
        <header>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    id="searchInput"
                    onChange={handleSearch}
                />

            </form>
        </header>
    )
}

export default SearchFilter