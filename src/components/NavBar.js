import React from "react";

function NavBar() {
    return (
        <nav>
            <div className="nav-wrapper grey darken-4">
                <div className="container">
                    <ul className="hide-on-med-and-down right">
                        <li><a href="/news5">Apple News</a></li>
                        <li><a href="/news4">Tesla News</a></li>
                        <li><a href="/news3">Business Headlines</a></li>
                        <li><a href="/news2">TechCrunch Headlines</a></li>
                        <li><a href="/news1">Wall Street Journal Related</a></li>
                        <li><a href="/localfood">Food in Everett</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;