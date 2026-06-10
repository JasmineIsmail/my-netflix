import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate,useLocation } from 'react-router-dom';
import { useSelector,useDispatch  } from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice'
import { NETFLIX_LOGO, USER_ICON } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(store => store.user);
  const dispatch= useDispatch();
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid,email,displayName} = user;
                dispatch(
                  addUser({
                    uid:uid,
                    email:email,
                    displayName:displayName,
                  }))
                  if(location.pathname === "/"){
                    navigate("/browse");
                  }
            } else {
             // User is signed out
             dispatch(removeUser());
             navigate("/");
            }
        })
        return ()=> unsubscribe();
    },[location.pathname])


  const handleSignout =async ()=>{
    try{
       await signOut(auth);
    }catch(error){
      navigate("/error")
    };
  }
  const handleAISearchClick =()=>{
   if (location.pathname === "/search") {
      navigate("/browse");
    } else {
      navigate("/search");
    }
  }
  return (
    <div className="fixed left-0 top-0 w-full z-50 
               bg-linear-to-b from-black/80 via-black/30 to-transparent
               grid grid-cols-3 md:flex md:justify-between items-center px-4 md:px-8 py-3">
   
    <div className="md:hidden"></div>

    {/* 2. Logo (Centered on mobile via grid, left-aligned on desktop) */}
    <div className="flex justify-center md:justify-start">
      <img 
        src={NETFLIX_LOGO}
        alt='logo'
        className='w-28 md:w-44 object-contain' 
      />
    </div>
    {user && ( 
      <div className='flex items-center justify-end gap-2 md:gap-4'>
        <button 
          className='bg-amber-400 text-white font-bold px-2.5 py-1.5 md:py-2 text-xs md:text-base rounded-lg'
          onClick={handleAISearchClick}>
          {location.pathname === "/search" ? "Home" : "AI Search"}
        </button>
        <div className='flex flex-col items-center justify-center min-w-12.5'>
          <img
            src={USER_ICON}
            alt="user" 
            className='w-8 h-8 md:w-10 md:h-10 rounded object-cover'
          />
          <button 
            onClick={handleSignout} 
            className="text-[10px] md:text-xs text-white font-bold hover:underline mt-1 whitespace-nowrap">
              Sign Out
          </button>
        </div>
      </div>
    )}
</div>
    
  ) 
}

export default Header