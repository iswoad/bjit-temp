import React from 'react';
import bjitLogo from '../../Images/bjit-logo2.svg'

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light justify-content-center">
            <div class="container-fluid shadow p-3 mb-5 pt-0 bg-white rounded">
                <a className="navbar-brand" href="/home"><img style = {{height: '40px'}} src={bjitLogo} alt="" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link ms-5" href="Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5" href="About us">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5" href="Companies">Companies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5" href="Services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5" href="Clients">Clients</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5" href="News">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5" href="Career">Career</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5" href="Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;