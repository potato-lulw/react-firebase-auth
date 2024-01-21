
import './App.css';
import AuthDetails from './components/auth-details';
import SignIn from './components/auth/sign-in';
import SignUp from './components/auth/sign-up';

function App() {
  return (
    <div className="App">
      <SignIn/>
      <SignUp/>
      <AuthDetails/>
    </div>
  );
}

export default App;
