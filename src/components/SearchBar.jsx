import React from 'react'

const SearchBar = ({search,setSearch,filterType,setFiltertype,filterLocation,setFilterLocation,}) => {
  return (
    <div style={{marginBottom:'20px'}}>
        <input type='text' placeholder='search by title or company' value={search}
        onChange={(e)=>setSearch(e.target.value)} style={{padding:'8px', marginRight:'10px'}}/>
        <select value={filterType} onChange={(e) => setFiltertype(e.target.value)} style={{ padding: "8px", marginRight: "10px" }}>
        <option value="">All Types</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Internship">Internship</option>
      </select>
      <select value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)} style={{ padding: "8px" }}>
        <option value="">All Locations</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Chennai">Chennai</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Pune">Pune</option>
        <option value="Delhi">Delhi</option>

      </select>

    </div>
  )
}

export default SearchBar