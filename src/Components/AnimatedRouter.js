import React from 'react';
import Main from './Main';
import MyWork from './MyWork';
import AboutUs from './AboutUs';
import Contact from './Contact';
import { AnimatePresence } from 'framer-motion';
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";

function AnimatedRouter(){
	const location = useLocation();
	return(
		<AnimatePresence>
				<Routes location = {location} key = {location.pathname}>
						<Route path="/" element={<Main/>}/>
		              	<Route path="/AboutUs" element={<AboutUs/>}/>
		           		 <Route path="/MyWork" element={<MyWork/>}/>
		                 <Route path="/Contact" element={<Contact/>}/>
		         </Routes>
        </AnimatePresence>
	);
}

export default AnimatedRouter;