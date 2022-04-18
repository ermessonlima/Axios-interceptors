import Header from './components/Header'
import Footer from './components/Footer'

// import { Login } from './pages/Login'
// import { ResetPassword } from './pages/ResetPassword'
// import { Register } from './pages/Register'
import { Login } from './pages/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <ResetPassword /> */}
      {/* <Register /> */}
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
