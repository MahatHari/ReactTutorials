import React, { useState } from "react";

function App() {
  const [userName, setUserName] = useState(["Adam"]);

  const changeUser = () => {
    setUserName(userName === "Adam" ? "Bob" : "Adam");
  };

  return (
    <div className="App ">
      <h4 className="bg-primary text-white text-center p-2">
        {userName}'s To Do List
      </h4>
      <button className="btn btn-primary m-2 " onClick={changeUser}>
        Change
      </button>
    </div>
  );
}

export default App;
