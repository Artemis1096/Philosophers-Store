import React from "react";
import {NavLink} from 'react-router-dom'
import '../../styles/User.css'

const UserMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4 className="user-sidemenu-heading">Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action user-sidemenu-items"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action user-sidemenu-items"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
