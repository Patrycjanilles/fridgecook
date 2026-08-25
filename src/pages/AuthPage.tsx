
import {useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import './AuthPage.css'
import { useState, useEffect } from 'react'
import useAuth from '../hooks/useAuth'


function AuthPage() {
    const navigate = useNavigate()
    const { user } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user, navigate])

    async function handleSignIn() {
        setError('')
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })
        if (error) {
            setError(error.message)
            return
        }
        navigate('/')
    }
    async function handleSignUp() {
        setError('')
        const { error } = await supabase.auth.signUp({
            email,
            password,
        })
        if (error) {
            setError(error.message)
            return
        }
        navigate('/')
    }

    return (
        <div className='auth-page'>
            <h1 className='auth-title'>Sign In</h1>
            <p className='auth-subtitle'>Log in or create an account</p>

            <form className='auth-form' 
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSignIn()
                  }}
                  >
                    <input 
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                     />

                     <input 
                     type="password" 
                     placeholder='Password'
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     />

                     {error != '' && (
                        <p className='auth-error'>{error}</p>
                     )}

                     <button type='submit'>Sign in</button>
                     <button type='button' className='auth-button' onClick={handleSignUp}>Create account</button>


            </form>

        </div>
    )
}
export default AuthPage 