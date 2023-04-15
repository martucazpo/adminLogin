import { Routes, Route } from "react-router-dom"
import PrivateRoute from "./components/routes/PrivateRoute"
import PublicRoute from "./components/routes/PublicRoute"
import HomePage from "./components/pages/HomePage"
import LandingPage from "./components/pages/LandingPage"
import Navbar from "./components/nav/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
