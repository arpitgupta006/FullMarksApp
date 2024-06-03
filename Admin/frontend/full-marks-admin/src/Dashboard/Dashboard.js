import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';


const Dashboard= ()=> {
  const navigate = useNavigate();
  return (
    <div>
      
      <Sidebar className=''>
      <div>
        <i class="fa-solid fa-user"></i>
        <p>User@gmail.in</p>
        </div>
        <p>Main Navigation</p>
        <Menu>
          <MenuItem> Dashboard </MenuItem>

          <SubMenu label="  Master Filters"> 
            <MenuItem>  Classes </MenuItem>
            <MenuItem> Subjects </MenuItem>
            <MenuItem> Series </MenuItem>
            <MenuItem> Books </MenuItem>
            <MenuItem> Sections </MenuItem>
            <MenuItem> Units </MenuItem>
            <MenuItem> Chapters </MenuItem>
            <MenuItem>Topics </MenuItem>
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
            <MenuItem> Students </MenuItem>
            <MenuItem> Reports </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default Dashboard