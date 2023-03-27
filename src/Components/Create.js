
import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function Create() {

    const [first_name, setfName] = useState("");
    const [last_name, setlast_name] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("clicked");
      await fetch('https://reqres.in/api/users    ', {
        method: 'POST',
        body: JSON.stringify({ first_name, last_name, email }),
        headers: {
            'content-Type' : 'application/json'
        }
    })
    };
  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2>Create</h2>
        <Link to="/">
          <button className="btn btn-dark">Show Data</button>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setfName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setlast_name(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  )
}
