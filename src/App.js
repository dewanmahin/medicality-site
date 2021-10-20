import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Header></Header>
                <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path='/home'>
              <Header></Header>
                <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path='/about'>
              <Header></Header>
                <About></About>
              <Footer></Footer>
            </Route>
            <Route path='/doctors'>
              <Header></Header>
                <Doctors></Doctors>
              <Footer></Footer>
            </Route>
            <Route path='/contact'>
              <Header></Header>
                <Contact></Contact>
              <Footer></Footer>
            </Route>
            <Route path='/login'>
              <Header></Header>
                <Login></Login>
              <Footer></Footer>
            </Route>
            <Route path='/register'>
              <Header></Header>
                <Register></Register>
              <Footer></Footer>
            </Route>
            <PrivateRoute path='/servicedtl/:id'>
              <Header></Header>
                <ServiceDetail></ServiceDetail>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
