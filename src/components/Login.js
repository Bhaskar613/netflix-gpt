import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate'

const Login = () => {

    const [isSignInForm, setIsSignInForm]=useState("true")

    const[errorMessage,setErrorMessage]=useState("")

    const name=useRef(null)
    const email=useRef(null)
    const password=useRef(null)

    const handleButtonClick=()=>{
        const message=checkValidData( name.current.value, email.current.value, password.current.value)
        setErrorMessage(message)
    }

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm)
    }

  return (

    <div>
        <Header/> 
        <div className='absolute' >
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/274d310a-9543-4b32-87f3-147b372abc00/web/IN-en-20251201-TRIFECTA-perspective_baf6d3bc-eece-4a63-bcbb-e0a2f5d9d9ec_large.jpg" 
        alt="logo"/>
        </div>  
        <form onSubmit={(e)=>e.preventDefault()} className='absolute w-3/12  bg-black p-12 my-24 mx-auto right-0 left-0 bg-opacity-80' >
            <div className='flex flex-col'>
                <h1 className='text-white font-bold text-xl cursor-pointer'>{isSignInForm?"Sign In":"Sign Up"}</h1>
                { !isSignInForm && <input ref={name}  type="text" placeholder='Full Name ' className='p-4 my-4 w-full bg-gray-500 bg-opacity-60'/>}
                 
                <input ref={email} type="text" placeholder='Email or Phone Number ' className='p-4 my-4 w-full bg-gray-500 bg-opacity-60'/>            
                <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-500 bg-opacity-60 '/>    

                <p className='text-red-950 font-bold'>{errorMessage}</p>

                <button className='bg-red-950 p-2 my-4 text-white w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button> 
                <div className='flex flex-row space-x-20'>
                    <div><input type="checkbox" id="mycheckbox" />
                        <label htmlFor="mycheckbox" className='text-white'>Remember Me</label>
                    </div>   
                    <h3 className='text-white'>Need help?</h3>
                </div>
                <div className='flex flex-col space-y-16 pt-10'>
                    <p className='text-white text-sm cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sing Up Now":"Already Registered Member"}</p>
                    <p className='text-white text-sm'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                </div>
                
            </div>
                  

        </form>
        
    </div>
  )
}

export default Login