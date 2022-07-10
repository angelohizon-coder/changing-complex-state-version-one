import React, { useState } from "react";

function App() {
  var [firstName, changeFN] = useState("");
  var [lastName, changeLN] = useState("");

  function updateFN(event) {
    changeFN(event.target.value);
  }

  function updateLN(event) {
    changeLN(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={updateFN}
          placeholder="First Name"
          value={firstName}
        />
        <input
          name="lName"
          onChange={updateLN}
          placeholder="Last Name"
          value={lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
