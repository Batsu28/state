import { useState } from "react";
import SignUp from "./signUpModul";

export default function WelcomePage(prop) {
  const { check } = prop;
  const { addUser } = prop;
  const { logInData } = prop;

  const [username, getUsername] = useState("");
  const [password, getPassword] = useState("");
  return (
    <div className="welcomePage">
      <input
        type="text"
        placeholder="username"
        onChange={(e) => getUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => getPassword(e.target.value)}
      />
      <button onClick={() => check(username, password)}>Log In</button>
      <SignUp addUser={addUser} logInData={logInData} />
    </div>
  );
}
