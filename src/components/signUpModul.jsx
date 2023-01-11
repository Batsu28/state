import { useState } from "react";

export default function SignUp(prop) {
  const { addUser } = prop;
  const { logInData } = prop;
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  function saveUser() {
    if (name === "" || pass === "") {
      addUser(logInData);
    } else {
      addUser([...logInData, { name, pass }]);
    }
  }
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Sign Up
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Sign Up
              </h1>
            </div>
            <div className="modal-body d-flex flex-column">
              <label htmlFor="">
                Name:
                <input type="text" onChange={(e) => setName(e.target.value)} />
              </label>
              <label htmlFor="">
                Password:
                <input type="text" onChange={(e) => setPass(e.target.value)} />
              </label>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={saveUser}
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
