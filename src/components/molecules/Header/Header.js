import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Form Builder</h1>
            <nav>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/addform">Create Form</Link>
            </nav>
        </header>
    )
}

export default Header;