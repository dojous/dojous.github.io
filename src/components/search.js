import React from 'react'

const Search = ()=>{



return(
<>
    <div className="ui action input" style={{width: '600px'}}>
  <input type="text" placeholder="Search..."/>
  <button className="ui icon button">
    <i className="search icon"></i>
  </button>
</div>
</>
)

}

export default Search;