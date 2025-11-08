 import React from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";

const GoogleButton = () => {
    const {googleSignIn} = useAuth();
    const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try{
        const result = await googleSignIn();
        console.log('google user', result.user);
        navigate('/');

    }catch(error){
        console.log(error)
    } 
  };

  return (
    <button
      type="button"
      onClick={handleGoogleSignIn}
      className="w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 rounded-lg py-3 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
    >
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google logo"
        className="w-5 h-5"
      />
      Sign in with Google
    </button>
  );
};

export default GoogleButton;
