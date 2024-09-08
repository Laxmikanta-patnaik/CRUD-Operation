import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://66d59d58f5859a704266cf75.mockapi.io/crud-test")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  }

  function handleDelete(id) {
    axios.delete(`https://66d59d58f5859a704266cf75.mockapi.io/crud-test/${id}`)
    .then(() => {
        console.log("Deleted successfully");
        getData();
  
    })
  }

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id)
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
  }

  useEffect(() => {
    getData();
  },[]);

  return (
    <div>
      <h2>Read</h2>
      <table className="table table-bordered table-striped table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {data.map((allData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{allData.id}</th>
                  <td>{allData.name}</td>
                  <td>{allData.email}</td>
                  <td>
                    <Link to={"/update"}>
                        <button className="btn btn-success"
                        onClick={() => setToLocalStorage(
                            allData.id,
                            allData.name,
                            allData.email
                        )}
                        >
                            Edit
                            </button>
                    </Link>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDelete(allData.id)}>Delete</button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Read;
