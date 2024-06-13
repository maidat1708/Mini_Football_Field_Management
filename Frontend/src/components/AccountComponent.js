import React, { useEffect, useState } from 'react'

export default function AccountComponent() {
    
    const [listAcc, setlistAcc] = useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:8080/accounts")
    //     .then((response) => {
    //         response.json()
    //         console.log(response.json())
    //     })
    //     .then((data) => {
    //         setlistAcc(data)
    //     })
    //     .catch((error)=> {console.log(error)})
    // },[]);

    useEffect(() => {
        fetch("http://localhost:8080/accounts")
          .then((response) => response.json())
          .then((data) => {
            setlistAcc(data);
            console.log(data);
          })
          .catch((err) => console.log(err));
      }, []);
  return (
    <div>
      {/* Employees List filtered */}
      <div>
        <h2 className="text-center mt-3">Account List</h2>
        <div className="row">
          <a href="/acc/0" className="btn btn-primary">Add Customer</a>
        </div>
        <div className="row mt-3">
          <table className="table table-dark table-striped-columns table-bordered">
            <thead>
              <tr>
                <th>Username</th>
                <th>Password</th>
              </tr>
            </thead>

            <tbody>
              {listAcc.map((acc) => (
                <tr key={acc.id}>
                  <td>{acc.username}</td>
                  <td>{acc.password}</td>
                  <td>
                    <button data-id={acc.id} className="btn btn-primary">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Form action */}
      <form id="formAction" method="GET" action=""></form>
    </div>
  )
}
