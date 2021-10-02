import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/login';

function App() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <LoginPage />
        </div>
    );
}

export default App;
