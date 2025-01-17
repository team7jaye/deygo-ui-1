import * as yup from "yup";

const validationSchema = {
  login: yup.object().shape({
    email: yup.string().trim().email("Invalid Email").required().label("Email"),
    password: yup.string().required().label("Password"),
  }),

  agentSignup: yup.object().shape({
    userId: yup.string().required().label("User ID"),
    accessKey: yup.string().required().label("Access Key"),
    email: yup.string().trim().email("Invalid Email").required().label("Email"),
  }),

  agentOTPVerify: yup.object().shape({
    otp: yup.string().min(6).max(6).required().label("OTP"),
  }),

  signup: yup.object().shape({
    name: yup.string().trim().required().label("Name"),
    email: yup.string().trim().email().required().label("Email"),
    phoneNumber: yup.string().required().trim().label("Phone Number"),
  }),

};

export default validationSchema;
