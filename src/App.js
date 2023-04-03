import './App.scss';
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
        <Route path={`${ITEM}/:itemID`} element={<Item />} />
        <Route path={PROFILE} element={<Profile />}  />
        <Route path={SIGN_IN} element={<Signin />}  />
        <Route path={SIGN_UP} element={<Signup />}  />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
