import { Route, Routes } from "react-router-dom";
import ForeCast from "../../Pages/ForeCast";
import Dashboard from '../../Pages/Dashboard/index'
import AllOffices from "../../Pages/AllOffices";
import Employees from "../../Pages/Employees";
import Welcome from '../../Pages/Welcome'

function AppRoutes() {
  return (
    <Routes>
      <Route index={true} element={<Welcome />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/forecast" element={< ForeCast/>}></Route>
      <Route path="/all-offices" element={< AllOffices/>}></Route>
      <Route path="/employees" element={< Employees/>}></Route>
    </Routes>
  );
}
export default AppRoutes;
