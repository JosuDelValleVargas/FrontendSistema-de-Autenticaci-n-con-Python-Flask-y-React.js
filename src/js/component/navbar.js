
import React, { useContext, useState, useEffect} from "react";
import { Context } from "../store/appContext";
import {
    Link
} from "react-router-dom";

import { useNavigate } from "react-router-dom"


export const Navbar = () => {

  let navigate =useNavigate()
  let {actions} = useContext(Context)
  const [logged, setLogged] = useState (false)

  useEffect(()=>{

    const token = localStorage.getItem("myToken");
    console.log(token)

    if (token === null) navigate("/login");
    setLogged(true)
  },
  
  [])


  function handleLogout(){
    const hasToken =actions.logout();
    if (hasToken){
      navigate("/login")
    }
  }

    return (
      <nav className="navbar navbar-light bg-light mb-3">
      	<Link to="/">
        	<span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
            {logged?  
         		  (<button className="btn btn-primary" onClick={handleLogout}>Logout </button>
              ):
              (<button className="btn btn-primary" onClick={()=>navigate("/login")}>Login </button>
              )
            }
        </div>
      </nav>
    );
};