import React, { useContext } from 'react';
import './pnf.css';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';

const PageNotFound = () => {
  //Theme
  const {theme} = useContext(Context);

	let them_col = {
		"color": "black"
	}

	//Theme-Logic
    if(theme === "light"){
        them_col = {
			    "color": "black"
		    }
    }
    if(theme === "dark"){
        them_col = {
			    "color": "white"
		    }
    }
  return (
    <div className="pnf">
      <h1 style={them_col}>404 Uhh Ohh!</h1>
      <p className="zoom-area" style={them_col}><b>Page Not Found</b> You can head over to Home Page. </p>
      <section className="error-container">
        <span className="four"><span className="screen-reader-text">4</span></span>
        <span className="zero"><span className="screen-reader-text">0</span></span>
        <span className="four"><span className="screen-reader-text">4</span></span>
      </section>
      <div className="link-container">
        <Link  to="/" className="more-link">Home</Link>
      </div>
    </div>
  )
}

export default PageNotFound