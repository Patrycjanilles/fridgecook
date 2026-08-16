import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
import logo from '../assets/logo.svg'
import { useState } from 'react'

function Layout() {

    const [menuOpen, setMenuOpen] = useState(false)

    function closeMenu() {
        setMenuOpen(false)
    }




    return (
        <div className='layout'>
            <header className='header'>
                <Link to="/" className='logo' onClick={closeMenu}>
                <img src={logo} alt="FridgeCook" />
                </Link>

                <button 
                type="button"
                className='hamburger'
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
                >

                {menuOpen ? 'x' : '☰'}

                </button>
                <nav className={menuOpen ?'touch-bar is-open' : 'touch-bar'}>
                    <Link to="/" className='bar-link' onClick={closeMenu}>Find</Link>
                    <Link to="/recipes" className='bar-link' onClick={closeMenu}>CookBook</Link>
                    <Link to="/favorites" className='bar-favorites' onClick={closeMenu}>Favorites</Link>
                    <Link to="/" className='sign-in' onClick={closeMenu}>Sign In</Link>
                    
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout; 
