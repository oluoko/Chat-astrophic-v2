import { Route, Routes } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import "./App.css";
import Login from "./components/Login";
import MainContainer from "./components/MainContainer";
import Welcome from "./components/Welcome";
import ChatArea from "./components/ChatArea";
import Users from "./components/Users";
import Groups from "./components/Groups";
import CreateGroup from "./components/CreateGroup";

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <>
      <div className="App" data-theme={isDark ? "dark" : "light"}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="app"
            element={<MainContainer isdark={isDark} setisdark={setIsDark} />}
          >
            <Route path="welcome" element={<Welcome />}></Route>
            <Route path="chat" element={<ChatArea />}></Route>
            <Route path="users" element={<Users />}></Route>
            <Route path="groups" element={<Groups />}></Route>
            <Route path="create-groups" element={<CreateGroup />}></Route>
          </Route>
        </Routes>
        {/* <Login /> */}
      </div>
    </>
  );
}

export default App;
