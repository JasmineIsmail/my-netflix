export const validateSignUpForm =(name,email,password)=>{
   const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
   const isPasswordValid=  /^(?=.*[A-Za-z])(?=.*\d).{8,64}$/.test(password);
   const isNameValid = /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name.trim());
   if(!isNameValid)
    return "Please enter a valid name"
   if(!isEmailValid)
    return "E mail is not valid"
   if(!isPasswordValid)
    return "Password not valid"

   return null;
}

export const validateSignInForm =(email,password)=>{
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const  isPasswordValid=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
    if(!isEmailValid)
        return "E mail is not valid"
    if(!isPasswordValid)
        return "Password not valid"

    return null;

}