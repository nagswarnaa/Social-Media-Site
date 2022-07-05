import './App.css';
import MainContainer from './components/mainContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from './components/navBar'
import LoginForm from './components/pages/loginPage';
import RegistrationPage from './components/pages/registrationPage';
import Profile from './components/pages/profilePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContainer />}></Route>
          <Route index element={<NavBar />}></Route>
          <Route path="login" element={<LoginForm />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="register" element={<RegistrationPage />}></Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
