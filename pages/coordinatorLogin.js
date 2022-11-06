import React from "react";

export default function coordinatorLogin() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" action="/api/login/coordinator" method="post">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In as Coordinator</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              name="email"
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
