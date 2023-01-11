import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";




const Login = ({onLogin}) => {
    const [showLogin, setShowLogin] = useState(true);


    return ( 
        <div>
            <h1>GREATEST VENUES</h1>
            {showLogin ? (
                <>
                    <LoginForm onLogin={onLogin} />
                    <p>
                        <button onClick={() => setShowLogin(false)}>
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