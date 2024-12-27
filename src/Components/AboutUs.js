import React,{Component} from 'react';
import { motion } from 'framer-motion';
import '../Style/AboutUs.css';

class AboutUs extends Component{
	render(){
		return(
			<motion.div className = "About container" initial = {{opacity : 0}} animate = {{opacity : 1}} exit = {{opacity : 0}}>
					<h2 className = "heading">About</h2>
					<h5 className = "secondHeading">Good Morning to all</h5>
					<p className = "AboutContent">I am Adwait Tiwari. I am a Bachelor of Computer Application(BCA) graduate from the university name <u>Sam Higginbottom institute of Agriculture and Engineering Technology</u>. </p>
					<p className = "AboutContent">I am very Good in :</p>
					<ul className = "AboutContent">
						<li>Web development</li>
						<li>Cyber Security</li>
						<li>Programming</li>
						<li>Blockchain</li>
					</ul>
					<p className = "AboutContent">I am very good Coder you can see my work by clicking on the My Work Section.</p>
			</motion.div>
		);
	}
}

export default AboutUs;