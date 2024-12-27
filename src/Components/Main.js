import React,{Component , useState } from 'react';
import { useNavigate } from "react-router-dom";
import Profile from '../images/profile.png';
import {motion } from 'framer-motion';
import '../Style/Main.css';

function Main(){
	const navigate = useNavigate();

	const page = ()=>{
		navigate('/MyWork')
	}

	const [imageUrl, setImageUrl] = useState("https://drive.google.com/file/d/1wTbQOu2aEcVKcdqLEbeDTmxzzNUd2bci/view?usp=share_link");
	  
	  const handleClick = () => {
	    const link = document.createElement("a");
	    link.href = imageUrl;
	    link.download = "image.jpg";
	    document.body.appendChild(link);
	    link.click();
	    document.body.removeChild(link);
	     link = null;
	  };
	return(
		<motion.div className = 'content' initial = {{opacity : 0}} animate = {{opacity : 1}} exit = {{opacity : 0}}>
				<img className = 'image' src = {Profile} alt = 'image' />
				<div className = 'innerContent'>
					<h2 className = "mainContent">Hello</h2>
					<p className = "mainContent">Hello My Name is Adwait Tiwari</p>
					<button type="button" class="btn btn-outline-danger m-2" onClick = {handleClick}>Download CV</button>
					<button type="button" class="btn btn-outline-success m-2" onClick = {page}>Projects</button>
				</div>
		</motion.div>
	);
}

export default Main;