export const USER_AVATAR = 
"https://media.licdn.com/dms/image/v2/D5603AQE7TbWDoixgXQ/profile-displayphoto-scale_400_400/B56Z2LB7K6IsAk-/0/1776154034983?e=1778112000&v=beta&t=ZXC_m87BoEf8Odn65sOVmpXdYYD0cf8mAovgsPvMTWM";


export const USER_ICON =
 "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3BmLWljb240LWppcjIwNjQtcG9yLWwtam9iNzg4LnBuZw.png";

 export const NETFLIX_LOGO= 
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const NETFLIX_BANNER =
  "https://assets.nflxext.com/ffe/siteui/vlv3/4371a395-0e42-46ae-be36-5755eebc638b/web/IN-en-20260209-TRIFECTA-perspective_3a6d8659-ddfe-4547-9584-dce64c02c230_large.jpg" 

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+ import.meta.env.VITE_TMDB_KEY
  }
};

export const IMG_CDN_URL ="https://image.tmdb.org/t/p/w500/";

export const GEMINI_API_KEY =import.meta.env.VITE_GEMINI_API_KEY
  