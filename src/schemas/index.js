import * as yup from 'yup'
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
const ageRule = /^(1[89]|[2-9]\d)$/;
const phoneRules = /^(\+91|0)?[6789]\d{9}$/;

// sign up validation schema
export const basicSchema = yup.object().shape({
    name: yup.string().min(3).required("This field is required"),
    email: yup.string().email("please Enter a valid email").required("This field is required"),
    phone: yup.string().matches(phoneRules, { message: "Enter a valid number" }).required("This field is required."),
    age: yup.string().matches(ageRule, { message: "Please enter a valid age" }).required("This field is required."),
    password: yup.string().min(8).matches(passwordRules, { message: "Please create a strong password" }).required("This field is required."),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "password must match").required("This filed is rquired.")

})

// Login validation schema
export const loginSchema = yup.object().shape({
    email: yup.string().email("enter a vilid email").required("This field is required"),
    password: yup.string().required("this field is required")
})