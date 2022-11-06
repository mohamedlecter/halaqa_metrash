import React from "react";

export default function teacherLogin() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" action="/api/login/teacher" method="post">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign in as teacher</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              className="form-control mt-1"
              type="email"
              name="email"
              placeholder="Type your email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              className="form-control mt-1"
              type="password"
              name="password"
              placeholder="Type your password"
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
