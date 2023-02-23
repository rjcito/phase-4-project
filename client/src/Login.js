import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";




const Login = ({ onLogin }) => {
    const [showLogin, setShowLogin] = useState(true);


    return ( 
        <div style = {{backgroundImage: `url(https://media.tenor.com/GSlN2WbMxNIAAAAi/hands-up-%E3%83%95%E3%82%B8%E3%83%AD%E3%83%83%E3%82%AF.gif)`, 
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "gold",
        color: "black",
        fontFamily: 'cursive'

        
        
        
        }}>
            <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '70vh' }}>The Greatest Concert Venues</h1>
            {showLogin ? (
                <>
                    <LoginForm  onLogin={onLogin} />
                    <p style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                        <button  onClick={() => setShowLogin(false)}>
                        Sign Up
                        </button>
                    </p>

                </>
            ):(
                <>
                    <SignupForm onLogin={onLogin}/>
                    <p> 
                        Already a registered user?
                        <button onClick={() => setShowLogin(true)}>
                        Log In
                        </button>
                    </p>
                </>

            )}
        </div>
    
    
    
    
    );
}
 
export default Login;