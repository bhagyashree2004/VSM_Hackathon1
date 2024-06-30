import React, { useState } from 'react';
import {FaSearch} from "react-icons/fa"
import './Searchbar.css'


const Searchbar = ({ onSearch }) => {
  const [input, setInput] = useState("")

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    onSearch(input);
  };
    
  
  return (
    <div className='input-wrapper flex'>
       <FaSearch id="search-icon"/>
       <input type="search" placeholder="Search..." value={input} onChange={handleInputChange} />
       <button type="button" onClick={handleSearch} className='px-2 py-1 rounded-lg mx-0 text-sm text-black font-semibold bg-blue-100 hover:bg-blue-950 hover:text-white'>Search</button>
    </div>
  );
};

export default Searchbar;