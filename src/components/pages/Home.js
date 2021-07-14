import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    };

    return (
        <div className="container-fluid" style={{ backgroundColor: "#6d7b74" }}>
            <div className="py-4">
                <h2 className="text-center mb-4">Home Page</h2>
                <table class="table table-dark table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            {/* <th scope="col">Action</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <Link type="Link" class="btn btn-danger" to={`/users/${user.id}`}>View</Link>
                                        <Link type="Link" class="btn btn-warning" to={`/users/edit/${user.id}`}>Edit</Link>
                                        <Link type="Link" class="btn btn-success" onClick={() => deleteUser(user.id)}>Delete</Link>
                                    </div>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;