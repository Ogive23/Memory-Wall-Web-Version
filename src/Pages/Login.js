import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Container,
  FormControlLabel,
  FormHelperText,
  Link,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SendIcon from "@mui/icons-material/Send";
import Lottie from "lottie-react";
import loadingAnimation from "./../Assets/Animations/lf30_editor_acdfloqg.json";
import axios from "axios";

export const LoginPage = () => {
  const [values, setValues] = useState({
    email: "",
    emailValidationError: null,
    password: "",
    passwordValidationError: null,
    error: null,
    rememberMe: false,
    showPassword: false,
    isLoading: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setValues({
      ...values,
      password: event.target.value,
      passwordValidationError: null,
    });
  };

  const handleEmailChange = (event) => {
    setValues({
      ...values,
      email: event.target.value,
      emailValidationError: null,
    });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const validateEmail = () => {
    var regex = /\S+@\S+\.\S+/;
    let valid = regex.test(values.email);
    if (!values.email || valid) {
      return setValues({ ...values, emailValidationError: null });
    }
    return setValues({
      ...values,
      emailValidationError: "Email isn't correctly formatted",
    });
  };
  const showPasswordCopyError = (e) => {
    e.preventDefault();
    return setValues({
      ...values,
      passwordValidationError: "Copy is forbidden",
    });
  };
  const submit = async () => {
    setValues({
      ...values,
      isLoading: true,
    });
    try {
      console.log({
        email: values.email,
        password: values.password,
        accessType: "Web",
        appType: "MemoryWall",
      });
      let response = await axios.post("http://127.0.0.1:8000/api/login", {
        email: values.email,
        password: values.password,
        accessType: "Web",
        appType: "MemoryWall",
      });
      localStorage.setItem("user", response.data.data.user);
      localStorage.setItem("profile", response.data.data.profile);
      localStorage.setItem("accessToken", response.data.data.token);
      localStorage.setItem("expiryDate", response.data.data.expiryDate);
      setValues({
        ...values,
        isLoading: false,
      });
    } catch (error) {
      console.log(error.response.data);
      setValues({
        ...values,
        isLoading: false,
        error: error.response.data["Err_Desc"],
        password: "",
      });
    }
  };
  return (
    <Container maxWidth="sm">
      <Card variant="outlined" sx={{ borderRadius: 5 }} className="px-4 py-2">
        <form onSubmit={submit}>
          <CardHeader
            title={<h2 className="text-center">Log in</h2>}
          ></CardHeader>
          <CardContent>
            <FormControl
              error={values.emailValidationError ? true : false}
              required
              fullWidth
              className="mb-3"
            >
              <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                value={values.email}
                onChange={handleEmailChange}
                onBlur={validateEmail}
                label="Email"
              />
              <FormHelperText id="component-error-text">
                {values.emailValidationError ?? ""}
              </FormHelperText>
            </FormControl>
            <FormControl
              error={values.passwordValidationError ? true : false}
              required
              fullWidth
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handlePasswordChange}
                onPaste={(e) => {
                  showPasswordCopyError(e);
                }}
                fullWidth
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <FormHelperText id="component-error-text">
                {values.passwordValidationError ?? ""}
              </FormHelperText>
            </FormControl>
            <FormControlLabel
              control={<Checkbox {...values.rememberMe} defaultChecked />}
              onChange={handleChange("rememberMe")}
              label="Remember me"
            />
            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "#ff1744" }}
              className="text-center"
              gutterBottom
            >
              {values.error ?? ""}
            </Typography>
          </CardContent>
          <CardActions className="d-grid">
            <Button
              variant="contained"
              endIcon={values.isLoading ? <></> : <SendIcon />}
              style={{ background: "#363B42" }}
              className="mb-3 py-2"
              // onClick={submit}
              type="submit"
              disabled={values.isLoading ? true : false}
            >
              {values.isLoading ? (
                <Box sx={{ width: "10%", height: "55%" }}>
                  <Lottie animationData={loadingAnimation} />
                </Box>
              ) : (
                "Sign in"
              )}
            </Button>
            <Link href="#" underline="none" sx={{ textAlign: "right" }}>
              Forgot Password?
            </Link>
          </CardActions>
        </form>
      </Card>
    </Container>
  );
};

export default LoginPage;
