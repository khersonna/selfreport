import React from 'react'

import '../Search/search.css'

const Search =() =>{
    return(
        <div className="header__form">
            <form action="">
                <input className="search" type="search" placeholder="Search"/>
                <img className="search__img" src="#" alt=""/>
            </form>
        </div>
    )
}

export default Search