import { useState } from "react";
import "./App.css";
import WelcomePage from "./components/welcomePage";
import Tools from "./components/tools";

function App() {
  const [logInData, setLogInData] = useState([
    {
      name: "admin",
      pass: "pass",
    },
    {
      name: "name",
      pass: "123",
    },
  ]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function checkLogIn(username, password) {
    logInData.map((user) => {
      if (username === user.name && password === user.pass) {
        setIsLoggedIn(true);
      }
    });
  }
  return (
    <div className="">
      <div className="App">
        {isLoggedIn ? (
          <Tools logOut={setIsLoggedIn} />
        ) : (
          <WelcomePage
            check={checkLogIn}
            logInData={logInData}
            addUser={setLogInData}
          />
        )}
      </div>
    </div>
  );
}

export default App;
