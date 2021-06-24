import "./Login.scss";
import ReactDOM from "react-dom";
import { validateEmail } from "../../utils/utils";
import usePasswordValidator from "../../utils/usePasswordValidator";
import { Button, FormControlLabel, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { STATUSES } from "../../constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [password, setPassword, passwordError] = usePasswordValidator({
    min: 8,
    max: 15,
  });
  useEffect(() => {
    if (!email) {
      setEmailError("");
    } else {
      if (validateEmail(email)) {
        setEmailError("");
      } else {
        setEmailError("Please enter a valid email.");
      }
    }
  }, [email]);

  useEffect(() => {
    if (!confirmPassword || !password) {
      setConfirmPasswordError("");
    } else {
      if (password !== confirmPassword) {
        setConfirmPasswordError("The passwords must match.");
      } else {
        setConfirmPasswordError("");
      }
    }
  }, [password, confirmPassword]);

  return (
    <div>
      <form>
        <h3>Please log in</h3>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
        <div className="error">{emailError}</div>

        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        <div className="error">{passwordError}</div>

        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Confirm Password"
        />
        <div className="error">{confirmPasswordError}</div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
