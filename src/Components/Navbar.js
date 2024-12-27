import React,{Component} from 'react';
import {
  Link,
} from "react-router-dom";
 import '../Style/Navbar.css';

class Navbar extends Component{
	render(){
		return(
			<nav class="navbar navbar-expand-lg bg-body-tertiary">
			  <div class="container-fluid">
			    <a class="navbar-brand navContent" href="#"><div className = "square"></div>Adwait Tiwari</a>
			    <div class = "d-flex justify-content-enLink">
			    	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
				      <span class="navbar-toggler-icon"></span>
				    </button>
				    <div class="collapse navbar-collapse naviContent" id="navbarSupportedContent">
				      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
				        <li class="nav-item">
				          <Link class="nav-link active nextContent" aria-current="page" to="/">Home</Link>
				        </li>
				        <li class="nav-item">
				          <Link class="nav-link active nextContent" aria-current="page" to="/AboutUs">About US</Link>
				        </li>
				        <li class="nav-item">
				          <Link class="nav-link active nextContent" aria-current="page" to="/MyWork">Projects</Link>
				        </li>
				         <li class="nav-item">
				          <Link class="nav-link active nextContent" aria-current="page" to="/Contact">Contact</Link>
				        </li>
				      </ul>
				    </div>
			    </div>
			  </div>
			</nav>

		);
	}
}
export default Navbar;