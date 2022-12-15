import Home from "./pages/home/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Account from "./pages/home/account/Account";
import Login from "./pages/home/login/Login";
import Register from "./pages/home/register/Register";
import Friends from "./pages/home/friends/Friends";
import Ouserprofile from "./pages/home/ouserprofile/Ouserprofile";
import Newfriends from "./components/newfriends/Newfriends";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/friend" element={<Friends/>} />
          <Route path="/user/:id" element={<Ouserprofile/>} />
          <Route path="/add" element={<Newfriends/>} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
