import { Route, Routes } from "react-router-dom";
import RootPage from "./pages/home";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<RootPage/>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
