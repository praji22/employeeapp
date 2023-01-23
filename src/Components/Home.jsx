import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import Navbar from './Navbar'

const Home = () => {
    var [employeeList,setEmployee]=useState([]);
    var [isLoading,setloading] = useState(true);

    useEffect(
        ()=>{
            getdata();
        },[]
    )
    const getdata = ()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(
            (response)=>{
                console.log(response.data)
                setEmployee(response.data)
                setloading(false)
            }
        )
        .catch(
            (error)=>{
                console.log("error occured"+error)
            }
        )
    }

  return (
    <div>
        {isLoading === true ? (<Loading/>) :(
            <div className="container">
            <Navbar/>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table table-primary table-striped">
                            <thead>
                             <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                </tr>
                            </thead>
                             <tbody>
                             {employeeList.map((value,index)=>{
                                return <tr>
                                <th scope="row">{value.id}</th>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                                </tr>
                                 })}
                             </tbody>
                             </table>
                            </div>
                    </div>
                </div>
            </div>
        
            </div>
        )}
    </div>
  )
}

export default Home