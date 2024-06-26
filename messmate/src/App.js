import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Admin/Admin";
import Dailyentry from "./Admin/Pages/Dailyentry";
import Adduser from "./Admin/Pages/Adduser";
import Menu from "./Admin/Pages/Menu";
import MenuHome from "./Components/Menu";
import User from "./User/User";
import UserMenu from "./User/Pages/UserMenu";
import EditProfile from "./User/Pages/EditProfile";
import Subscription from "./User/Pages/Subscription";
import PersistentLogin from "./Auth/PersistentLogin";
import RequireAuth from "./Auth/RequireAuth";
import Main from "./Components/Main";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Alluser from "./Admin/Pages/Alluser";
import Info from "./User/Pages/Info";
import Aboutus from "./Components/Aboutus";
import Unauthorized from "./Components/Unauthorized";
import Attendance from "./User/Pages/Attendance";
import ProfileScanner from "./User/Pages/ProfileScanner";
import QRCodes from "./User/Pages/QRCodes";
import QrAttendance from "./Admin/Pages/QrAttendance";
import Dashboad from "./Admin/Pages/Dashboad";
import Inventory from "./Admin/Pages/Inventory";
import Employee from "./Employee/Employee";
import EmployeeDashboad from "./Employee/Pages/Dashboad";
import SuperAdmin from "./SuperAdmin/SuperAdmin";
import SuperadminDashboad from "./SuperAdmin/Pages/SuperadminDashboad";
import Allmess from "./SuperAdmin/Pages/Allmess";
import Addmess from "./SuperAdmin/Pages/Addmess";
import Adduserforsuperadmin from "./SuperAdmin/Pages/Adduser";
import Alluserforsuperadmin from "./SuperAdmin/Pages/Alluser";

//import MessManagement from "./Superadmin/Pages/MessManagement";
//import UserManagement from "./Superadmin/UserManagement";

function App() {
  return (
    <>
      <div className="App ">
        <BrowserRouter>
          <Routes>
            <Route element={<PersistentLogin />}>
            <Route path="/" element={<Main />}>
              <Route path="" element={<Home />}></Route>
              <Route path="/menu" element={<MenuHome />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/about" element={<Aboutus />}></Route>
            </Route>
              <Route element={<RequireAuth accessRole={1} />}>
                <Route path="/admin" element={<Admin />}>
                <Route path='' element={<Dashboad />}></Route>

                  <Route path="attendance" element={<Dailyentry />}>
                  </Route>
                  <Route path="qrattendance" element={<QrAttendance />}>
                  </Route>
                  <Route path="adduser" element={<Adduser />}>
                  </Route>
                  <Route path="inventory" element={<Inventory />}>
                  </Route>
                  <Route path="alluser" element={<Alluser />}>
                  </Route>
                  <Route path="menu" element={<Menu />}>
                  </Route>
                </Route>
              </Route>
              <Route element={<RequireAuth accessRole={2} />}>
                <Route path="/employee" element={<Employee />}>
                <Route path='' element={<EmployeeDashboad />}></Route>

                  <Route path="qrattendance" element={<QrAttendance />}>
                  </Route>
                  <Route path="menu" element={<Menu />}>
                  </Route>
                </Route>
              </Route>
              <Route element={<RequireAuth accessRole={0} />}>
                <Route path="/user" element={<User />}>
                  <Route path="" element={<ProfileScanner />}>
                  </Route>
                  <Route path="editprofile" element={<EditProfile />}>
                  </Route>
                  <Route path="subscription" element={<Subscription />}>
                  </Route>
                  <Route path="usermenu" element={<UserMenu />}>
                  </Route>
                  <Route path="qrcodes" element={<QRCodes />}>
                  </Route>

                  <Route path="attendance" element={<Attendance />} />
                  <Route path="information" element={<Info />}>
                  </Route>
                </Route>
              </Route>
              <Route element={<RequireAuth accessRole={3} />}>
                <Route path="/superadmin" element={<SuperAdmin />}>
                  <Route path='' element={<SuperadminDashboad />}></Route>
                  {/*<Route path="/superadmin/messes" element={<MessManagement />}>*/}
                  {/*</Route>*/}
                  <Route path="addmess" element={<Addmess />}>
                  </Route>
                  <Route path="allmess" element={<Allmess />}>
                  </Route>
                  <Route path="adduser" element={<Adduserforsuperadmin />}>
                  </Route>
                  <Route path="alluser" element={<Alluserforsuperadmin />}>
                  </Route>
                </Route>
              </Route>
            </Route>
            <Route path="/unauthorized" element={<Unauthorized />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
