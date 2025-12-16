
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { signIn, signUp } from '../lib/Auth'

const SignInPage = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess]=useState(false)
    const [isLoginMode, setIsLoginMode] = useState(true)

    const navigate=useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setLoading(true)

        try {
            if (!isLoginMode) {
                if (password !== confirmPassword) {
                    throw new Error("Passwords do not match")
                }
                try {

                    await signUp(email, password, username)
                    setSuccess(true)
                    setTimeout(() => {
                        navigate('/sign-in')
                    }, 200);
                    
                } catch (error) {
                    setError(error.message || 'failed to create an account')
                    console.error(error)
                }finally{
                    setLoading(false)
                }

            } else {
                try {
                    await signIn(email, password)
                    navigate('/')
                } catch (error) {
                    setError(error.message)
                    console.error('error: ',error)

                }finally{
                    setLoading(false)
                }
            }
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }


    if(success){
        return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full text-center">
           <div className="bg-white rounded-lg shadow-md p-8">
             <div className="text-green-500 text-5xl mb-4">✓</div>
             <h2 className="text-2xl font-bold mb-2">Account Created!</h2>
             <p className="text-gray-600 mb-4">
               Your account has been created successfully. Please check your email for verification.
             </p>
             <p className="text-gray-500 text-sm">
               Redirecting to sign in page in a few seconds...
             </p>
           </div>
         </div>
       </div>
        )
    }

    return (
        <section className='grid w-full py-8 place-items-center'>
            <div className='max-w-90 sm:max-w-107.5  bg-white p-8 rounded-2xl shadow-lg '>
                <div className="relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden">
                    <div
                        className={`bg absolute top-0 h-full w-1/2 rounded-full transition-all duration-300
                         ${isLoginMode ? "left-0" : "left-1/2"} z-0`}
                    />

                    <button
                        onClick={() => setIsLoginMode(true)}
                        className={`w-1/2 text-lg font-medium z-10 transition-colors duration-300
                         ${isLoginMode ? "text-white" : "text-black"}`}
                    >
                        Sign In
                    </button>

                    <button
                        onClick={() => setIsLoginMode(false)}
                        className={`w-1/2 text-lg font-medium z-10 transition-colors duration-300
                         ${!isLoginMode ? "text-white" : "text-black"}`}
                    >
                        Sign Up
                    </button>

                </div>

                {/* title */}
                <div className='flex flex-col justify-center mb-4'>
                    <h1 className='text-3xl font-semibold text-center'>{isLoginMode ? 'Sign in' : 'Create an account'}</h1>
                    <p className='text-sm text-gray-700 tracking-tighter text-center pt-2'>{isLoginMode ?
                        'Sign in to manage your orders, appointments, and measurements.'
                        : 'Join us to place orders, save your measurements, and get personalized tailoring services.'}</p>
                </div>
                <div className='p-2'>
                    {error && (
                      <p className="text-red-600 text-sm text-center">{error}</p>
                    )}
                </div>


                {/* form section */}
                <form onSubmit={handleSubmit} className='space-y-4'>
                    {
                        !isLoginMode && (
                            <div className='mb-2'>
                                <label htmlFor="username">username:</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e)=>setUsername(e.target.value)}
                                    placeholder='name'
                                    className='w-full border-2 px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:border-cyan-500 placeholder-gray-400'
                                    required
                                />
                            </div>
                        )
                    }

                    {/* shared fields */}
                    <div className='mb-2'>
                        <label htmlFor="email">email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder='email address'
                            className='w-full border-2 px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:border-cyan-500 placeholder-gray-400'
                            required
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="password">password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder='password'
                            className='w-full border-2 px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:border-cyan-500 placeholder-gray-400'
                            required
                        />
                    </div>

                    {
                        !isLoginMode && (
                            <div className='mb-2'>
                                <label htmlFor="confirmPassowrd">confirm password:</label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)}
                                    placeholder='confrim password'
                                    className='w-full border-2 px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:border-cyan-500 placeholder-gray-400'
                                    required
                                />
                            </div>
                        )
                    }
                    {/* shared buttons */}
                    <button 
                      disabled={loading}
                       className='w-full mt-6 px-3 py-2 bg text-white text-lg rounded-lg hover:opacity-90 transition-all duration-300'
                    >
                        {
                            loading 
                            ? isLoginMode ? 'Signing in...':'creating account...'
                            : isLoginMode ? 'Sign in' : 'create account'
                        }
                    </button>

                    {/* switch link */}
                    <p className='text-sm text-center text-gray-600'>
                        {isLoginMode ? 'Dont have an account' : "Already have an account"}?
                        <Link className='text-cyan-700' onClick={() => setIsLoginMode(!isLoginMode)}>{isLoginMode ? 'Signup' : 'Signin'}</Link>
                    </p>
                </form>

            </div>
        </section>
    )
}

export default SignInPage
