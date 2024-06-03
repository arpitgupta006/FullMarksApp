import React, { useState } from 'react';
import uib from "./Assets/Uib.jpg"; // Example user image
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isMasterFilterOpen, setIsMasterFilterOpen] = useState(false);
  const [isHomepageOpen, setIsHomepageOpen] = useState(false);
  const [isUsersOpen, setIsUsersOpen] = useState(false);


  const toggleMasterFilter = () => {
    setIsMasterFilterOpen(!isMasterFilterOpen);
  };


  const toggleHomepage = () => {
    setIsHomepageOpen(!isHomepageOpen);
  };

  const toggleUsers = () => {
    setIsUsersOpen(!isUsersOpen);
  };

  return (
    <div className=" sidebar col-md-3 bg-white text-dark shadow p-3 mb-5 bg-white rounded" >
      <div className="py-4 px-3" style={{ backgroundImage: `url(${uib})`, backgroundSize: 'cover' }}>
        <div className="mb-4">
          <img alt="User" className="rounded-circle mr-2" style={{ width: '40px', height: '40px' }} />
          <span className="font-weight-bold">John Doe</span>
        </div>
      </div>
      <div className='bg-grey text-dark'>Main Navigation</div>
      <ul className="list-unstyled">
        <li className='px-3 mt-3 menu-item'>Dashboard</li>
        <li className='px-3 mt-3 menu-item' onClick={toggleMasterFilter} style={{ cursor: 'pointer' }}>
          <div className="d-flex justify-content-between align-items-center">
            <span>Master Filters</span>
            <span>{isMasterFilterOpen ? '-' : '+'}</span>
          </div>
          {isMasterFilterOpen && (
            <ul className="list-unstyled pl-3 mt-2">
              <Link to = "/classes" ><li className='px-3 mt-2 submenu-item'>Classes</li></Link>
              <Link to = "/classes" ><li className='px-3 mt-2 submenu-item'>Subjects</li></Link>
              <Link to = "/classes" ><li className='px-3 mt-2 submenu-item'>Series</li></Link>
              <Link to = "/classes" ><li className='px-3 mt-2 submenu-item'>Books</li></Link>
              <Link to = "/classes" ><li className='px-3 mt-2 submenu-item'>Sections</li></Link>
              <Link to = "/classes" ><li className='px-3 mt-2 submenu-item'>Units</li></Link>
              <Link to = "/classes" ><li className='px-3 mt-2 submenu-item'>Chapters</li></Link>
              <Link to = "/classes" ><li className='px-3 mt-2 submenu-item'>Topics</li></Link>
              <Link to = "/classes" ><li className='px-3 mt-2 submenu-item'>Sub Topics</li></Link>
            </ul>
          )}
        </li>
        <li className='px-3 mt-3 menu-item' onClick={toggleHomepage} style={{ cursor: 'pointer' }}>
          <div className="d-flex justify-content-between align-items-center">
            <span>Homepage</span>
            <span>{isHomepageOpen ? '-' : '+'}</span>
          </div>
          {isHomepageOpen && (
            <ul className="list-unstyled pl-3 mt-2">
              <li className='px-3 mt-2 submenu-item'>Our Resources</li>
              <li className='px-3 mt-2 submenu-item'>Subscribers</li>
            </ul>
          )}
        </li>
        <li className='px-3 mt-3 menu-item' onClick={toggleUsers} style={{ cursor: 'pointer' }}>
          <div className="d-flex justify-content-between align-items-center">
            <span>Users</span>
            <span>{isUsersOpen ? '-' : '+'}</span>
          </div>
          {isUsersOpen && (
            <ul className="list-unstyled pl-3 mt-2">
               <Link to = "/schoollist" ><li className='px-3 mt-2 submenu-item'>School</li></Link>
               <Link to = "/teacherlist" ><li className='px-3 mt-2 submenu-item'>Teacher</li></Link>
               <Link to = "/studentlist" ><li className='px-3 mt-2 submenu-item'>Student</li></Link>
               <Link to = "/classes" ><li className='px-3 mt-2 submenu-item'>Report</li></Link>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
