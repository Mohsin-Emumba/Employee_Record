import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        webiste: ""
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    };
    return (
        <div className="container  ">
            <div className="w-75 mx-auto shadow p-5" style={{ backgroundColor: "#6d7b74" }}>


                <h2 className="text-center mb-4">User Id: {id}</h2>
                <hr />
                <ul className="list-group w-100 ">

                    <li className="list-group-item list-group-item-action list-group-item-secondary mt-2">name: {user.name}</li>
                    <li className="list-group-item list-group-item-action list-group-item-secondary mt-2">user name: {user.username}</li>
                    <li className="list-group-item list-group-item-action list-group-item-secondary mt-2">email: {user.email}</li>
                    <li className="list-group-item list-group-item-action list-group-item-secondary mt-2">phone: {user.phone}</li>
                    <li className="list-group-item list-group-item-action list-group-item-secondary mt-2">website: {user.website}</li>
                </ul>
                <div className="col-md-12 text-center">
                    <Link className="btn btn-secondary bg-dark btn-block mt-4" to="/">Home</Link>

                </div>
            </div></div>
    );
};

export default User;