import React from "react";
import { Link } from 'react-router-dom'

const handleClick = () => <Link to="/news1" />
    


function NavBar() {
    return (
        <nav>
            <div className="nav-wrapper grey darken-4">
                <div className="container">
                    <ul className="hide-on-med-and-down right">
                        <li><Link to="/news5">Apple News</Link></li>
                        <li><Link to="/news4">Tesla News</Link></li>
                        <li><Link to="/news3">Business Headlines</Link></li>
                        <li><Link to="/news2">TechCrunch Headlines</Link></li>
                        <li><Link to="/news1">Wall Street Journal Related</Link></li>
                        <li><Link to="/localfood">Food in Everett</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;