import React,{Component} from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import '../Style/Contact.css';

function Contact(){

	function sendEmail(e){
		e.preventDefault();

		emailjs.sendForm(
			'default_service',
			'template_fho6nh8',
			e.target,
			'zc33WKQpBoNwgWDxw').then(res =>{
				console.log(res);
			}).catch(err =>console.log(err));
	}

	return(
			<motion.div className = "container contact" initial = {{opacity : 0}} animate = {{opacity : 1}} exit = {{opacity : 0}}>
				<h1 className = "contactHeading">Let Us Talk</h1>
				<form onSubmit = {sendEmail}>
					  <div class="mb-3">
					    <label for="exampleInputEmail1" class="form-label">Name</label>
					    <input type="text" class="form-control" name = "name" aria-describedby="emailHelp"/>
					  </div>
					  <div class="mb-3">
					    <label for="exampleInputPassword1" class="form-label">Email</label>
					    <input type="email" class="form-control" name  = "users-email" id="exampleInputPassword1"/>
					  </div>
					  <div class="mb-3">
					  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
					  <textarea class="form-control" id="exampleFormControlTextarea1" name = "message" rows="3"></textarea>
					</div>
					  <button type="submit" class="btn btn-primary">Submit</button>
					</form>
			</motion.div>
		);
}

export default Contact;