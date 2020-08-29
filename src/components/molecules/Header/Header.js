import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Form Builder</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/addform">Create Form</Link>
            </nav>
        </header>
    )
}

export default Header;