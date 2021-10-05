import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviesApi from './components/MoviesApi';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Susbcriptions from './components/pages/Susbcriptions';
import { ThemeContext } from './Context/ThemeContext';
import Home from './components/pages/Home';
import Signup from './components/sign/Signup';

function App() {
  const [theme, settheme] = useState('light');

  //Theme logic 
  let page_bg = {background: "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)"};
  if(theme === "light"){
    page_bg = {background: "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)"};
  }

  if(theme === "dark"){
    page_bg = {background: "linear-gradient(315deg, #2d3436 0%, #000000 74%)"};
  }

  return (
    <>
      <ThemeContext.Provider value={{theme, settheme}}>
        <Router>
          <Navbar/>
          <Switch>

          <Route exact path="/">
              <div className="App" style={page_bg}>
                <Home/>
              </div>
            </Route>

            <Route exact path="/signup">
              <div className="App" style={page_bg}>
                <Signup />
              </div>
            </Route>

            <Route exact path="/movies">
              <div className="App" style={page_bg}>
                <MoviesApi category="Movies" key="mov" />
              </div>
            </Route>

            <Route exact path="/series">
              <div className="App" style={page_bg}>
                <MoviesApi category="Series" key="ser" />
              </div>
            </Route>

            <Route exact path="/subs">
              <div className="App">
                <Susbcriptions />
              </div>
            </Route>

          </Switch>
        </Router>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
