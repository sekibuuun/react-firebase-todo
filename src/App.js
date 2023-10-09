import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <div style={{ margin: "2em" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
