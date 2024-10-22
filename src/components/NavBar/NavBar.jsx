import { useState } from "react";
import Link from "../Link/Link";

import {  IoMenuOutline, IoClose } from 'react-icons/io5';




const Navbar = () => {
    const[open, SetOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/service', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' },
      ];
      
    
      
    return (
        <nav>
          <div className="md:hidden" onClick={() => SetOpen(!open)}>
            {
                open === true ? <IoClose></IoClose> : 
                <IoMenuOutline className="text-2xl ">\</IoMenuOutline>
            }



            
          </div>
            <ul className="md:flex">
            {
                routes.map(route =><Link key={route.id} route={route}></Link> )
            }
            </ul>
        </nav>
    );
};



export default Navbar;