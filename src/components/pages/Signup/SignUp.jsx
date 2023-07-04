import React from "react";
import { Form, Field } from "formik";
import { TextField } from "@mui/material";
import style from "./signup.module.css";
import { useFormik } from "formik";
import { basicSchema } from "../../../schemas";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const SignUp = () => {
  const navigate=useNavigate();
  
const onSubmit = async(values,actions) => {
  console.log(values);
  console.log(actions)
  await new Promise((resolve)=>setTimeout(resolve,1000));



const storedValues = JSON.parse(localStorage.getItem("values"));
if (storedValues && storedValues.email === values.email ) {
  console.log("Email exists in localStorage");
  console.log(storedValues);
  // Show success toast message
  toast.error("User Already Exist...Login!", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
} else {
  console.log("User doesn't exist");
  // Show error toast message
  console.log("submitted");
toast.success("Sign up successful!",{
  position:toast.POSITION.TOP_CENTER_CENTER,
  autoClose:3000,
 
})
  localStorage.setItem("values",JSON.stringify(values));

}
await new Promise((resolve) => setTimeout(resolve, 3000));

navigate("/login");
};
  const { values, errors, touched,isSubmitting, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        name: "",
        phone: "",
        age:"",
        password: "",
       
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

    

  console.log(errors);

   
  return (
    
      <div className={style.signup}>
          
          <div className={style.signupContainer}>
            <div><h3>signup</h3></div>
        <form onSubmit={handleSubmit} autoComplete="off">
            <ToastContainer />
         
        <div className={style.inputContainer}>
          <input
            type="text"
            placeholder="Your name"
            id="name"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
            className={errors.name && touched.name ? style.inputError : ""}
          />
          {errors.name && touched.name && (
            <p className={style.error}>{errors.name}</p>
          )}
        </div>
        <div  className={style.inputContainer}>
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

        <div  className={style.inputContainer}> 
          <input
            type="text"
            id="phone"
            placeholder="10 digit number"
            onChange={handleChange}
            value={values.phone}
            onBlur={handleBlur}
            className={errors.phone && touched.phone ? style.inputError : ""}
          />
          {errors.phone && touched.phone && (
            <p className={style.error}>{errors.phone}</p>
          )}
        </div>

        <div  className={style.inputContainer}>
          <input
            type="text"
            id="age"
            placeholder="Age"
            onChange={handleChange}
            value={values.age}
            onBlur={handleBlur}
            className={errors.age && touched.age ? style.inputError : ""}
          />
          {errors.age && touched.age && <p className={style.error}>{errors.age}</p>}
        </div>
        <div  className={style.inputContainer}>
          <input
            type="text"
            id="password"
            placeholder="Create Password"
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
        <div  className={style.inputContainer}>
          <input
            type="text"
            id="confirmPassword"
            placeholder="Confirm password"
            onChange={handleChange}
            value={values.confirmPassword}
            onBlur={handleBlur}
            className={
              errors.confirmPassword && touched.confirmPassword
                ? style.inputError
                : ""
            }
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <p className={style.error}>{errors.confirmPassword}</p>
          )}
        </div>
        <button  className={style.button}type="submit" disabled={isSubmitting}>Sign up</button>
        <div>Already a customer ? <span className={style.login} onClick={()=>navigate("/login")}>Login</span></div>
      
        </form>
        </div>
        <ToastContainer />
      </div>

      
   
  );
};

export default SignUp;
