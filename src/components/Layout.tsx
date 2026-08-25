import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
import logo from '../assets/logo.svg'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'

function Layout() {

    const [menuOpen, setMenuOpen] = useState(false)
    const { user, signOut } = useAuth()

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
                    {user ? (
                        <button
                        type='button'
                        className='sign-in'
                        onClick={() => {
                            signOut()
                            closeMenu()
                        }}
                        
                        >Sign Out</button>
                    ) : (
                        <Link to='/login' className='sign-in' onClick={closeMenu}>
                            Sign In
                        </Link>
                    )}
                    
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout; 
