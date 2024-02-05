import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Post from "./Post";
import Layout from "./Layout";
import IndexPage from "./Pages/indexPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import { UserContextProvider } from "./userContext";
import CreatePage from "./Pages/CreatePage";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
