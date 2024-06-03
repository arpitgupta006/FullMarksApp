import React, { useState } from 'react';
import '../Cssfiles/Addclasses.css'; // Import the CSS file
import Sidebar from '../../Dashboard/Sidebar';
import SidebarDefunct from '../../Dashboard/SidebarDefunct';

const Addsections = () => {
  const [sectionName, setSectionName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost/fullmarks-server/Masterfilter/Classes/addclasses.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sectionName }),
      });
      const data = await response.json();
      if (data.success) {
        alert('Class added successfully');
      } else {
        alert('Failed to add class');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding class');
    }
  };

  return (
    <div className='bg-light'>
      <div className="container-fluid">
        <div className="row">
          <div className='col-md-2'>
          <SidebarDefunct/>
          </div>
          {/* Sidebar */}
        
          {/* Main content */}
          <div className="col-md-10">
            <div className="container mt-3">
              {/* Topbar */}
              <h5 className='text-grey my-3'>Add Section</h5>
              <div className="row">
                <div className="col-md-12 bg-white shadow-lg p-3 mb-5 bg-white rounded">
                  <form onSubmit={handleSubmit}>
                    <label>Section</label><br />
                    <input
                      className='custom-input mt-3'
                      placeholder='Enter Section Name'
                      value={sectionName}
                      onChange={(e) => setSectionName(e.target.value)}
                    /><br />
                    <button type="submit" className="btn btn-primary mt-3">Add Section</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addsections;
