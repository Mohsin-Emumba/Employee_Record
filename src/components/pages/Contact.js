import React from "react";

const Contact = () => {
    return (
        <div className="container" >
            <div className="w-75 mx-auto shadow p-5" style={{ backgroundColor: "#6d7b74" }}>
                <div className="py-4">
                    <h2 className="text-center mb-2">Contact Page</h2>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            <small id="emailHelp" class="form-text text-muted">
                                We'll never share your email with anyone else.
                            </small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                class="form-control"
                                id="exampleInputPassword1"
                            />
                        </div>
                        <div class="form-group form-check">
                            <input
                                type="checkbox"
                                class="form-check-input"
                                id="exampleCheck1"
                            />
                            <label class="form-check-label" for="exampleCheck1">
                                Check me out
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;