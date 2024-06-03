import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';


const SidebarDefunct= ()=> {
  const navigate = useNavigate();
  return (
    <div>
      
      <Sidebar className=''>
      <div>
        <i class="fa-solid fa-user"></i>
        <p>User@gmail.in</p>
        </div>
        <h7 className="justify-content-center">Main Navigation</h7>
        <Menu>
          <MenuItem> Dashboard </MenuItem>

          <SubMenu label="  Master Filters"> 
            <MenuItem onClick={()=>navigate('/classes')}>  Classes </MenuItem>
            <MenuItem onClick={()=>navigate('/subjects')}> Subjects </MenuItem>
            <MenuItem onClick={()=>navigate('/series')}> Series </MenuItem>
            <MenuItem onClick={()=>navigate('/books')}> Books </MenuItem>
            <MenuItem onClick={()=>navigate('/sections')}> Sections </MenuItem>
            <MenuItem onClick={()=>navigate('/units')}> Units </MenuItem>
            <MenuItem onClick={()=>navigate('/chapters')}> Chapters </MenuItem>
            <MenuItem onClick={()=>navigate('/topics')}>Topics </MenuItem>
          </SubMenu>
        </Menu>
        <Menu>
          <SubMenu label="Homepage"> 
            <MenuItem> Our Homepage </MenuItem>
            <MenuItem> Subscribers </MenuItem>
          </SubMenu>
          <SubMenu label="Test">
            <MenuItem> Test Templates </MenuItem>
            <MenuItem> Test Papers </MenuItem>
          </SubMenu>
          <SubMenu label="Users">
            <MenuItem onClick={()=>navigate('/schoollist')}> School </MenuItem>
            <MenuItem onClick={()=>navigate('/teacherlist')}> Teachers </MenuItem>
            <MenuItem onClick={()=>navigate('/studentlist')}> Students </MenuItem>
            <MenuItem> Reports </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default SidebarDefunct
