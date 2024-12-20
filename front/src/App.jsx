import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import FrontLayout from "./layouts/front/Index";
import { routes, admin_routes } from "./routes/route.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminLayout from "./layouts/admin/Index";
import "react-toastify/dist/ReactToastify.css"; 
// import "./App.scss";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          {Object.values(routes).map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <FrontLayout>
                  <route.component />
                </FrontLayout>
              }
            />
          ))}

          {Object.values(admin_routes).map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <AdminLayout>
                  <route.component />
                </AdminLayout>
              }
            />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
