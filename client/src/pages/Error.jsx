import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <Header />
      <h1>Error</h1>
      <Link to="/" className="text-indigo-500">
        Back to Home
      </Link>
    </div>
  );
}

export default Error;
