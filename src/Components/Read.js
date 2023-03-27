import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Read = () => {
  const [data, setData] = useState([]);

   const getData=async ()=> {
    const response =await fetch('https://reqres.in/api/users?page=1&per_page=15')
    const json = await response.json()
    setData(json.data) 
    console.log(data)
  }
    
  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2>List of Users</h2>
        <Link to="/create">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>
      <table >
        <thead>
          <tr>
            <th scope="col">SNo.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {
        data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <td>{eachData.first_name}</td>
                  <td>{eachData.last_name}</td>
                  <td>{eachData.email}</td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};
export default Read;