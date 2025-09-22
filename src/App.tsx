import { Routes, Route } from "react-router-dom";
import Footer from "./LandingPage/HeaderFooter/Footer.tsx";
import Header from "./LandingPage/HeaderFooter/Header.tsx";
import Body from "./LandingPage/Body/Body.tsx";
import Overview from "./LandingPage/pages/overview.tsx";
import Objectives from "./LandingPage/pages/objectives.tsx";
import Users from "./LandingPage/pages/users.tsx";
import Frontend from "./LandingPage/pages/frontend.tsx";
import Backend from "./LandingPage/pages/backend.tsx";
import Security from "./LandingPage/pages/security.tsx";
import Infra from "./LandingPage/pages/infra.tsx";
import GettingStarted from "./LandingPage/pages/getting-started.tsx";
import Tutorials from "./LandingPage/pages/tutorials.tsx";
import AboutUs from "./LandingPage/pages/about-us.tsx";

function App() {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 w-full h-full border-x container mx-auto"></div>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/objectives" element={<Objectives />} />
        <Route path="/users" element={<Users />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/security" element={<Security />} />
        <Route path="/infra" element={<Infra />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
