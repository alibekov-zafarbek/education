import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {HOME, ITEM, PROFILE, SIGN_IN, SIGN_UP} from './constants/routes'
import {Home, Item, Profile, Signin, Signup} from './pages'
import { Footer, Header } from './components';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={HOME} element={<Home />} exact />
        <Route path={`${ITEM}:elem`} element={<Item />} exact/>
        <Route path={PROFILE} element={<Profile />}  exact/>
        <Route path={SIGN_IN} element={<Signin />}  exact/>
        <Route path={SIGN_UP} element={<Signup />}  exact/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
