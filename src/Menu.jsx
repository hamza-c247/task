import React from 'react';
import { NavLink } from 'react-router-dom';


function Menu() {
    return (
        <>
        <div >
          <ul>
              <li>
                  <NavLink exact activeClassName="active_class" to="/"> HOME </NavLink>

              </li>
              <li>
                  <NavLink exact activeClassName="active_class" to="/aboutus"> ABOUT US </NavLink>
                  
              </li>
              <li>
                  <NavLink exact activeClassName="active_class" to="/users"> USERS </NavLink>
                  
              </li>
              <li>
                  <NavLink exact activeClassName="active_class" to="/post"> POST </NavLink>
                  
              </li>
          </ul>
          </div>
        </>
    )
}

export default Menu
