import React from 'react'
import '../App.css';
import * as FaIcons from 'react-icons/fa';


function Searchbar(props) {
    return (

        <div className="searchbar">
            <div className="searchBox"><input type="text" placeholder="Search Reviews" /></div>
            
            <div className="searchIcon" input type="submit" 
            onClick={()=> {window.location.pathname = "/results";}}>
                <FaIcons.FaSearch />
                </div>

        </div>

    );
  }


export default Searchbar