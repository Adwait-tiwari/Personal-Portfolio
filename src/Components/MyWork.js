import React, {Component} from 'react';
import { motion } from 'framer-motion';
import Dvideo from '../images/DVideo.png';
import Snake from '../images/Snake.jpeg';
import Spotify from '../images/Spotify.jpeg';
import Decentagram from '../images/Decentagram.png';
import Food from '../images/Food.png';
import '../Style/MyWork.css';

class MyWork extends Component{
	render(){
		let elementStyle = {
			width: '540px'	
		}
		return(
			<motion.div className = "container project" initial = {{opacity : 0}} animate = {{opacity : 1}} exit = {{opacity : 0}}>
				<h1 className = "projectHeading">Projects</h1>
				<div class="card mb-3" style={elementStyle}>
					  <div class="row g-0">
					    <div class="col-md-4">
					      <img src={Dvideo} class="img-fluid rounded-start" alt="..."/>
					    </div>
					    <div class="col-md-8">
					      <div class="card-body">
					        <h5 class="card-title">DVideo</h5>
					        <p class="card-text">This is decentralised video streaming website</p>
					      </div>
					    </div>
					  </div>
					</div>
					<div className = "d-flex flex-row-reverse">
						<div class="card mb-3" style={elementStyle}>
					  <div class="row g-0">
					    <div class="col-md-4">
					      <img src={Spotify} class="img-fluid rounded-start" alt="..."/>
					    </div>
					    <div class="col-md-8">
					      <div class="card-body">
					        <h5 class="card-title">Spotify</h5>
					        <p class="card-text">This is clone of spotify with pure HTML,CSS and Javascript</p>
					      </div>
					    </div>
					  </div>
					</div>
					</div>
					<div class="card mb-3" style={elementStyle}>
					  <div class="row g-0">
					    <div class="col-md-4">
					      <img src={Snake} class="img-fluid rounded-start" alt="..."/>
					    </div>
					    <div class="col-md-8">
					      <div class="card-body">
					        <h5 class="card-title">SnakeMania</h5>
					        <p class="card-text">This is snake game with HTML,CSS and Javascript</p>
					      </div>
					    </div>
					  </div>
					</div>
					<div className = "d-flex flex-row-reverse">
						<div class="card mb-3" style={elementStyle}>
					  <div class="row g-0">
					    <div class="col-md-4">
					      <img src={Decentagram} class="img-fluid rounded-start" alt="..."/>
					    </div>
					    <div class="col-md-8">
					      <div class="card-body">
					        <h5 class="card-title">Decentagram</h5>
					        <p class="card-text">This is a decentralised social media</p>
					      </div>
					    </div>
					  </div>
					</div>
					</div>
					<div class="card mb-3" style={elementStyle}>
					  <div class="row g-0">
					    <div class="col-md-4">
					      <img src={Food} class="img-fluid rounded-start" alt="..."/>
					    </div>
					    <div class="col-md-8">
					      <div class="card-body">
					        <h5 class="card-title">Food Delivery</h5>
					        <p class="card-text">This is Food delivery website with HTML,CSS and Javascript</p>
					      </div>
					    </div>
					  </div>
					</div>
			</motion.div>
		);
	}
}

export default MyWork;