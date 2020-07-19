import React from "react";

function AppMe() {
  console.log("process.env", process.env.REACT_APP_ENDPOINT);
  return <div>help</div>;
}

export default AppMe;
