import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <div className="container">
          <div className="loginas">
            <h2>Sign in as..</h2>
          </div>
          <div className="cards">
            <div className="Auth-form-container">
              <form className="Auth-form">
                <div className="Auth-form-content">
                  <Link href="/coordinator" className="anchorTag">
                    <h3 className="Auth-form-title">Admin</h3>
                  </Link>
                </div>
              </form>
            </div>
            <div className="Auth-form-container">
              <form className="Auth-form">
                <div className="Auth-form-content">
                  <Link href="/teacherLogin" className="anchorTag">
                    <h3 className="Auth-form-title">Teacher</h3>
                  </Link>
                </div>
              </form>
            </div>
            <div className="Auth-form-container">
              <form className="Auth-form">
                <div className="Auth-form-content">
                  <Link href="/parentLogin" className="anchorTag">
                    <h3 className="Auth-form-title">Parent</h3>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
