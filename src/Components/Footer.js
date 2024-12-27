import React,{Component} from 'react';
import '../Style/Footer.css';

class Footer extends Component{
	render(){
		return(
			<div className = "footer container" >
			<div className="container-fluid">
		    	<h5>Phone-No.</h5>
				<label>9305596269</label>
		  	</div>
		  	<div className="container-fluid">
		    	<h5>Email</h5>
				<label>tiwariadwait3@gmail.com</label>
		  	</div>
		  	<div className="container-fluid">
		    	<div className = "container">
		    			<h5 className = "follow">Follow : </h5>
						<i class="fa-brands fa-instagram p-3"></i>
						<i class="fa-brands fa-twitter p-3"></i>
						<i class="fa-brands fa-linkedin p-3"></i>
		    	</div>
		  	</div>
		  		<div className="container-fluid">
		    		<p>&copy; 2023 by Adwait Tiwari</p>
		  	</div>
			</div>
		);
	}
}

export default Footer;