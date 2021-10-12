import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviesApi from './components/MoviesApi';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Susbcriptions from './components/pages/Susbcriptions';
import { Context } from './Context/Context';
import Home from './components/pages/Home';
import Signup from './components/sign/Signup';
import LoadingBar from 'react-top-loading-bar'
import Signin from './components/sign/Signin';
import jwt from 'jsonwebtoken';
require('dotenv/config'); //DB_CONNECTION


function App() {
  let JWT_SEC =  "saltnaryvip";   

  const [progress, setProgress] = useState(0)

  const [theme, settheme] = useState('light');

  const [islogin, setislogin] = useState("none");

  useEffect(() => {
    if(localStorage.getItem('token')){
      let tkn = localStorage.getItem('token');
      console.log(JWT_SEC);
      if(tkn!="none"){
        const tok2usr = jwt.verify(tkn, JWT_SEC); 
        setislogin(tok2usr.username);
      }
    }
    else{
      localStorage.setItem('token', "none");
    }
    
  });
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
      <Context.Provider value={{theme, settheme, setProgress, islogin, setislogin}}>
        <Router>
        <LoadingBar
              color='#f11946'
              progress={progress}
              onLoaderFinished={() => setProgress(0)}
        />
          <Navbar/>
          <Switch>

          <Route exact path="/">
              <div className="App" style={page_bg}>
                <Home/>
              </div>
            </Route>

            <Route exact path="/signup">
              <div className="App" style={page_bg}>
                {islogin==="none"?<Signup />:<Home/>}
              </div>
            </Route>

            <Route exact path="/signin">
              <div className="App" style={page_bg}>
                {islogin==="none"?<Signin/>:<Home/>}
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
      </Context.Provider>
    </>
  );
}

export default App;
