import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../Dashboard/Sidebar';

const Classes = () => {
  return (
    <div className='bg-light' id = "classes">
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <Sidebar/>
        {/* Main content */}
        <div className="col-md-9 ">
          <div className="container mt-3 bg-white shadow-lg p-3 mb-5 bg-white rounded">
            {/* Topbar */}
            <h5 className='text-grey my-3 '>Classes</h5>
            <div className="row">
              <div className="col-md-6">
                <Link to={'/addclasses'}><button className="btn btn-primary">Add Classes</button></Link>
              </div>
            </div>
            {/* Table */}
            <div className="row mt-3">
              <div className="col-md-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">SNo</th>
                      <th scope="col">Classes</th>
                      <th scope="col">Sort Order</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Table rows will go here */}
                    <tr>
                      <td>1</td>
                      <td>Class A</td>
                      <td>1</td>
                      <td>
                        {/* Actions buttons */}
                        <button className="btn btn-sm btn-danger mr-2">Delete</button>
                        <button className="btn btn-sm btn-info">Edit</button>
                      </td>
                    </tr>
                    {/* Add more table rows as needed */}
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

export default Classes;
