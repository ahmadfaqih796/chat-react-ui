import { Box } from "@mui/material";
import React from "react";
import { useAlert } from "../../hooks/useAlert";
import { useAuth } from "../../hooks/useAuth";
import "./auth.style.css";
import { useModeTheme } from "../../hooks/useModeTheme";
// import logo from "../../logo.svg";

function LoginApp() {
  const [isActive, setIsActive] = React.useState(false);
  const { onLogin } = useAuth();
  const { onAlert } = useAlert();
  const { onMode } = useModeTheme();

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const logIn = () => {
    const userData = {
      user: "John Doe",
      token: "12345abcde",
    };
    try {
      onLogin(userData);
      onAlert("success", "Login successful!");
    } catch (error) {
      onAlert("error", "Login failed!");
    }
  };

  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.background.layout,
        transition: theme.palette.transition,
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: 1,
      })}
    >
      <Box
        sx={(theme) => ({
          background: theme.palette.background.container,
          transition: theme.palette.transition,
        })}
        className={isActive ? "container active" : "container"}
        id="container"
      >
        {/* Sign Up */}
        <Box className="form-container sign-up">
          <form action="">
            <h1>Sign Up</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registeration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </Box>

        {/* Sign In */}
        <Box
          className="form-container sign-in"
          sx={() => ({
            opacity: isActive ? 0 : 1,
          })}
        >
          <form>
            <h1>Sign In</h1>
            <button onClick={() => onMode("dark")}>Dark</button>
            <button onClick={() => onMode("light")}>Light</button>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forget Your Password?</a>
            <button onClick={logIn}>Sign In</button>
          </form>
        </Box>

        {/* Toggle */}
        <Box className="toggle-container">
          <Box
            sx={(theme) => ({ background: theme.palette.background.main })}
            className="toggle"
          >
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" id="login" onClick={handleClick}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all of site features
              </p>
              <button className="hidden" id="register" onClick={handleClick}>
                Sign Up
              </button>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginApp;
