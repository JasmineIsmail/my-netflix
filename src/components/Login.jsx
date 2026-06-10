import { useState,useRef, use } from 'react';
import Header from './Header';
import {validateSignInForm, validateSignUpForm } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { NETFLIX_BANNER, USER_AVATAR } from '../utils/constants';
import { addUser } from '../utils/userSlice'

const Login = () => {
  const [isSignInForm,setIsSignInForm]= useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name= useRef(null)
  const toggleForm =()=>{
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null)
  }
  const handleButtonClick =()=>{
    // validate the form
    const nameEntered = name.current?.value;
    const emailEntered = email.current.value;
    const passwordEntered =password.current.value;
    
    if(isSignInForm){
      const message =validateSignInForm(emailEntered,passwordEntered)
      if(message){
         setErrorMessage(message);
         return;
      }
      // sign in logic
      signInWithEmailAndPassword(auth,emailEntered,passwordEntered)
      .then((userCredential) => {
       // Signed in 
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"-"+errorMessage);
      });
    }
      
    if(!isSignInForm){
     
      const message =validateSignUpForm(nameEntered,emailEntered,passwordEntered)
      
      if(message){
         setErrorMessage(message);
         return
      } 
          //sign up logic
      createUserWithEmailAndPassword(auth, emailEntered,passwordEntered)
        
      .then((userCredential) => {
            // Signed up 
        const user = userCredential.user;
       
        updateProfile(user, {
           displayName: nameEntered, 
           photoURL: USER_AVATAR
        }).then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(
              addUser({
                uid:uid,
                email:email,
                displayName:displayName,
                photoURL:photoURL   
              })
            )
        }).catch((error) => {
          setErrorMessage(error.message);
        });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
        });
    }
  }
  return (
    <div className="relative h-screen w-screen">
      <img
          className='absolute inset-0 -z-10 w-full h-full top-0 left-0 object-cover' 
            src={NETFLIX_BANNER}
            alt="main-image"
      />
         {/* Header positioned over background */}
      <div className="absolute top-0 w-full z-20">
        <Header />
      </div>
        
       
      <div className='h-full flex justify-center items-center'>
        <form 
          onSubmit={(e)=>{
            e.preventDefault();
            handleButtonClick();
          }}
          className='relative bg-black text-white bg-opacity-90 md:bg-opacity-80 m-5 rounded-md w-full max-w-md md:w-3/12  flex flex-col p-6 md:p-6 opacity-80'>
          <h1 className='font-bold text-2xl m-auto p-2 '>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input 
            ref={name}
            type='text' placeholder="Your Name" className='p-2 m-4 bg-gray-500 rounded-md'  />
          )}
          <input 
            ref={email}
            type='text' placeholder="E mail address" className='p-2 m-4 bg-gray-500 rounded-md'  />
          <input 
            ref={password}
            type='password' placeholder="Enter your password" className='p-2 m-4  bg-gray-500 rounded-md'/>
          <p className='font-bold text-red-500 p-2 ml-4'>{errorMessage}</p>
          <button className='p-4 m-4 bg-red-700 font-bold  rounded-md'>  
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className='font-bold m-2 p-2 cursor-pointer' onClick={toggleForm}> 
            {isSignInForm ? "New to netflix ? Sign up now" : "Already a member ? Sign In "}
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login;