import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../Dashboard/Sidebar';
import SidebarDefunct from '../../Dashboard/SidebarDefunct';

const Units = () => {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    fetchUnits();
  }, []);

  const fetchUnits = async () => {
    try {
      const response = await fetch('http://localhost/fullmarks-server/Masterfilter/Classes/fetchclasses.php');
      const data = await response.json();
      if (data.success) {
        setUnits(data.classes);
      } else {
        alert('Failed to fetch classes');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error fetching classes');
    }
  };

  const handleDelete = async (class_id) => {
    try {
      const response = await fetch('http://localhost/fullmarks-server/Masterfilter/Classes/deleteclasses.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ class_id }),
      });
      const data = await response.json();
      if (data.success) {
        alert('Class deleted successfully');
        fetchUnits(); // Refresh the classes list
      } else {
        alert('Failed to delete class');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error deleting class');
    }
  };

  return (
    <div className='bg-light' id="classes">
      <div className="container-fluid">
        <div className="row">
          <div className='col-md-2'>
          <SidebarDefunct />
          </div>
          {/* Sidebar */}
          {/* Main content */}
          <div className="col-md-10">
            <div className="container mt-3 bg-white shadow-lg p-3 mb-5 bg-white rounded">
              {/* Topbar */}
              <h5 className='text-grey my-3'>Units</h5>
              <div className="row">
                <div className="col-md-6">
                  <Link to={'/addunits'}><button className="btn btn-primary">Add Units</button></Link>
                </div>
              </div>
              <hr></hr>
              {/* Table */}
              <div className="row mt-3">
                <div className="col-md-12">
                  <table className="table">
                    <thead>
                      <tr>
                      <th scope="col">SNo</th>
                        <th scope="col">Class</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Series</th>
                        <th scope="col">Book</th>
                        <th scope="col">Section</th>
                        <th scope="col">Units</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {units.map((cls, index) => (
                        <tr key={cls.class_id}>
                          <td>{index + 1}</td>
                          <td>{cls.class_name}</td>
                          <td>{cls.class_id}</td>
                          <td>
                            <Link to={`/updateunits/${cls.class_id}`}>
                              <button className="btn btn-sm btn-info mr-2">
                                Edit
                              </button>
                            </Link>
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => handleDelete(cls.class_id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Units;
