import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { useDataLayerValue } from './DataLayer';


function Header() {
    const [{user},dispatch]=useDataLayerValue();

  return (
    <div className="header">
        <div className="header_left">
        <SearchIcon className="search"/>
         <input 
         placeholder="Search for Songs"
         type="text"></input>
        </div>
        <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt="SS"/>
        <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header;