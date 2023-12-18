import React, { useState } from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <div className="App">
      {user ? <Dashboard /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;
