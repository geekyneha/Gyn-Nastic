import React from "react";
import { Form, Field } from "formik";
import { TextField } from "@mui/material";
import style from "./login.module.css";
import { useFormik } from "formik";
import { loginSchema } from "../../../schemas";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";







const Login = () => {
  const navigate =useNavigate();
  const onSubmit = async (values, { resetForm }) => {
    console.log(values);
    const storedValues = JSON.parse(localStorage.getItem("values"));
    if (storedValues && storedValues.email === values.email && storedValues.password ===values.password) {
      console.log("Email exists in localStorage");
      console.log(storedValues);
      // Show success toast message
      toast.success("Login successful!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } else {
      console.log("User doesn't exist");
      // Show error toast message
      toast.error("User doesn't exist!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
    await new Promise((resolve) => setTimeout(resolve, 3000));
    resetForm();
    
  };
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit, resetForm } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  console.log(errors);

  

  return (
    <>
    <div className={style.login}>
      <div className={style.loginContainer}>
        <div>
          <h3>Login</h3>
        </div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className={style.inputContainer}>
            <input
              type="text"
              placeholder="example@gmail.com"
              id="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              className={errors.email && touched.email ? style.inputError : ""}
            />
            {errors.email && touched.email && (
              <p className={style.error}>{errors.email}</p>
            )}
          </div>

          <div className={style.inputContainer}>
            <input
              type="text"
              id="password"
              placeholder="Enter password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              className={
                errors.password && touched.password ? style.inputError : ""
              }
            />
            {errors.password && touched.password && (
              <p className={style.error}>{errors.password}</p>
            )}
          </div>

          <button
            className={style.button}
            type="submit"
            disabled={isSubmitting}
          >
            Login
          </button>
          <div>
           New to Gymnastic ?{" "}
            <span className={style.signUp} onClick={() => navigate("/signup")}>
              signup
            </span>
          </div>
        </form>
        
      </div>
      <ToastContainer />
      <div className={style.goHome} onClick={()=>navigate("/")}>Go Home</div>

    </div>

         
          </>
  );
};

export default Login;
