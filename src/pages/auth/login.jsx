import { Box, TextField } from "@mui/material";
import React from "react";
import { useAlert } from "../../hooks/useAlert";
import { useAuth } from "../../hooks/useAuth";
import "./auth.style.css";
// import logo from "../../logo.svg";

function LoginApp() {
  const [isActive, setIsActive] = React.useState(false);
  const { onLogin } = useAuth();
  const { onAlert } = useAlert();

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleSignIn = React.useCallback(
    async (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log("first", email, password);
      try {
        await onLogin(email, password);
        onAlert("success", "Login successful!");
      } catch (error) {
        console.log("ffffffffffff", error);
        onAlert("error", error?.message || "Login failed!");
      }
    },
    [onLogin, onAlert]
  );

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
          <form onSubmit={handleSignIn}>
            <h1>Sign In</h1>
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
            <TextField
              type="email"
              name="email"
              defaultValue="ahmadfaqih796@gmail.com"
              placeholder="Email"
              size="small"
              fullWidth
              sx={(theme) => ({
                my: 2,
                "& .MuiOutlinedInput-root": {
                  background: theme.palette.background.main,
                  "& input": {
                    background: theme.palette.background.main,
                    color: theme.palette.text.primary,
                  },
                },
              })}
            />
            <TextField
              name="password"
              type="password"
              defaultValue="123"
              placeholder="Password"
              size="small"
              fullWidth
              sx={(theme) => ({
                "& .MuiOutlinedInput-root": {
                  background: theme.palette.background.main,
                  "& input": {
                    background: theme.palette.background.main,
                    color: theme.palette.text.primary,
                  },
                },
              })}
            />
            <a href="#">Forget Your Password?</a>
            <button type="submit">Sign In</button>
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
