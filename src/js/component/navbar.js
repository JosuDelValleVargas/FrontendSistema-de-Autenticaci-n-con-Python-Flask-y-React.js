import React from "react";
import {
    Link
} from "react-router-dom";

export const Navbar = () => {
    return (
        // <nav className="navbar navbar-light bg-light mb-3">
        // 	<Link to="/">
        // 		<span className="navbar-brand mb-0 h1">React Boilerplate</span>
        // 	</Link>
        // 	<div className="ml-auto">
        // 		<Link to="/demo">
        // 			<button className="btn btn-primary">Check the Context in action</button>
        // 		</Link>
        // 	</div>
        // </nav>

	<nav className="navbar navbar-expand-lg navbar-light bg-light bg-white">
  	<div className="container-fluid ">
      <img className="" style={{ height: "100px", width: "100px" }} src="https://thumbs.dreamstime.com/b/editorial-del-logotipo-de-la-alianza-guerra-las-galaxias-ilustrativo-en-el-fondo-blanco-los-iconos-logotipos-vectores-icono-210443646.jpg" />
 
      {/* <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form> */}

    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item dropdown  "> 
		          <a className="nav-link dropdown-toggle bg-primary text-white " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Favorites
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>


    );
};