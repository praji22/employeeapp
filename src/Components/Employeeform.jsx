import React from 'react'
import Navbar from './Navbar'

const Employeeform = () => {
  return (
    <div className="container ">
    <Navbar/>
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3 formwrapper">
                <h5>Add Employee Details</h5>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control w-75" placeholder='Enter Name'/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Designation</label>
                    <input type="text" className="form-control w-75" placeholder='Enter Designation'/>   
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Location</label>
                    <input type="text" className="form-control w-75" placeholder='Enter Location'/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Salary</label>
                    <input type="text" className="form-control w-75" placeholder='Enter Salary'/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btnsubmit">Submit</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Employeeform