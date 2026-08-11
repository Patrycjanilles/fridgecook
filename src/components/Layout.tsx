import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
import logo from '../assets/logo.svg'

function Layout() {
    return (
        <div className='layout'>
            <header className='header'>
                <Link to="/" className='logo'>
                <img src={logo} alt="FridgeCook" />
                </Link>
                <nav className='touch-bar'>
                    <Link to="/" className='bar-link'>Find</Link>
                    <Link to="/recipes" className='bar-link'>Recipes</Link>
                    <Link to="/" className='sign-in'>Sign In</Link>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout; 
