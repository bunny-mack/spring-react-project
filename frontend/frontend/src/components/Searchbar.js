import React from 'react'
import '../App.css';
import * as FaIcons from 'react-icons/fa';


function Searchbar(props) {
    return (
      <nav className="searchbar">
        <FaIcons.FaSearch />
      </nav>

    );
  }


export default Searchbar