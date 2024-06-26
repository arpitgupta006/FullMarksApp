import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../../Dashboard/Sidebar';
import SidebarDefunct from '../../Dashboard/SidebarDefunct';

const UpdateUnits = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [unitData, setUnitData] = useState({ unitName: '', sortOrder: '' });

  useEffect(() => {
    fetchUnitData();
  }, [id]);

  const fetchUnitData = async () => {
    try {
      const response = await fetch(`http://localhost/fullmarks-server/Masterfilter/Classes/getClass.php?class_id=${id}`);
      const data = await response.json();
      if (data.success) {
        setUnitData({ bookName: data.class.class_name, sortOrder: data.class.sort_order });
      } else {
        alert('Failed to fetch class data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error fetching class data');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUnitData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost/fullmarks-server/Masterfilter/Classes/updateclasses.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ class_id: id, ...unitData }),
      });
      const data = await response.json();
      if (data.success) {
        alert('Class updated successfully');
        navigate('/units');
      } else {
        alert('Failed to update class');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error updating class');
    }
  };

  return (
    <div className='bg-light'>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <Sidebar/>
          {/* Main content */}
          <div className="col-md-9">
            <div className="container mt-3">
              {/* Topbar */}
              <h5 className='text-grey my-3'>Update Unit</h5>
              <div className="row"></div>
    <div className="container mt-3 bg-white shadow-lg p-3 mb-5 bg-white rounded">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="className" className= 'mb-2'><b>Unit</b></label>
          <input
            type="text"
            className="form-control"
            id="className"
            name="className"
            value={unitData.unitName}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary d-flex">Update Unit</button>
      </form>
    </div>
    </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default UpdateUnits;
