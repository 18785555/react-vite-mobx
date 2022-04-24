import "./assets/css/bootstrap.css";
import "./assets/css/connect.css";
import "./assets/css/custom.css";
import "./assets/css/dark_theme.css";
import "./assets/connect.min.css"
import "./App.css"
import AppLayouts from "./Layouts/AppLayouts"
import Login from "./pages/login";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Dashboard from "./pages/item/dashboard";
import Maibox from "./pages/item/mailbox";
import Todo from "./pages/item/todo";
import Calendar from "./pages/item/calendar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/Layouts' element={<AppLayouts></AppLayouts>}>
          <Route path="calendar" element={<Calendar></Calendar>}></Route>
          <Route path="todo" element={<Todo></Todo>}></Route>
          <Route path="maibox" element={<Maibox></Maibox>}></Route>
          <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App

