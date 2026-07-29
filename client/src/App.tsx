import { useState } from "react";
import Login from "./features/auth/pages/Login";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return <AppRoutes />;
}

export default App;