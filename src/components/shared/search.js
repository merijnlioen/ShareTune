import React from 'react'

const Search = ({ placeholder }) => (
    <div className="search">
        <input type="text" className="search__input" placeholder={placeholder} />
    </div>
)

export default Search