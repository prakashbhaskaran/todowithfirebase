import Main from "./components/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";

import PrivateRoute from "./components/privateroute";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Main />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
