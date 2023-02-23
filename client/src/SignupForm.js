import React, {useState} from "react";

const SignupForm = ({onLogin}) => {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }








    return ( 
        <form onSubmit={handleSubmit}>
        <label>
            Username: 
        </label>
        <input type="text" id="username" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)}>
        </input>

        <label>
            Password:{"\n"}
        </label>{"\n"}
        <input type="password" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)}>
        </input>{"\n"}

        <label>
            Password Confirmation:
        </label>
        <input type="password" id="password_confirmation" autoComplete="current-password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}>
        </input>

        <button type="submit">
            {isLoading ? "Loading..." : "Sign Up"}
        </button>
        {errors.map((error) => (
            <ul key={error}>{error}</ul>

        ))}
    </form>

     );
}
 
export default SignupForm;