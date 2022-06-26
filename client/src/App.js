
import './App.css';
import MainContainer from './components/mainContainer';
import NavBar from './components/navBar';
import LoginForm from './components/loginPage';
import RegistrationPage from './components/registrationPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContainer />
      <LoginForm />
      <RegistrationPage />
    </div>
  );
}

export default App;
