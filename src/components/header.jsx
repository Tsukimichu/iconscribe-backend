import logo from '../assets/ICONS.png';
import '../css/header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        
        setTimeout(() => {
            navigate('/');
        }, 1500); 
    };
    

    return (
        <header className="header">
            <div className="header-container">
                <div className="loGo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className='left-nav'>
                <nav className="nav-container">
                    <Link to="/" onClick={(e) =>{
                        e.preventDefault();
                        const element = document.getElementById("home");
                        if (element) {
                            element.scrollIntoView({ behavior: "smooth"});
                        }
                    }}>
                        Home
                    </Link>

                    <Link to="/" onClick={(e) =>{
                        e.preventDefault();
                        const element = document.getElementById("services");
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth'});
                        }
                    }}>
                        Services
                    </Link>

                    <Link to="/" onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById("transactions");
                        if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                        }
                        }}>
                        Transactions
                    </Link>
                    <Link to="/" onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById("about");
                        if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                        }
                        }}>
                        About Us
                    </Link>
                    <Link to="/" onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById("contact");
                        if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                        }
                        }}>
                        Contact Us
                    </Link>
                </nav>

                    {isLoggedIn ? (
                        <div className="auth-button">
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    ) : (
                        <Link to="/login">
                            <div className="auth-button">
                                <button>Login/Register</button>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
