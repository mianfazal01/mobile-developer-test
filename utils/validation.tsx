import * as Yup from "yup";
export const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .matches(
      /^[a-zA-Z0-9._-\s]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\s*$/,
      "Invalid email"
    )
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(3, "Password must be at least 3 characters long"),
});
