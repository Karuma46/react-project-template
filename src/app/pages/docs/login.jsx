import React from "react";
import { useFormik } from "formik";
import Textinput from "app/components/inputs/Textinput";
import { Button } from "app/components/buttons";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("This field is required.")
    .email("Please input a valid email"),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: LoginSchema,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h2>Login Form</h2>
        <Textinput
          value={formik.values.email}
          type="email"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errors={formik.errors.email}
          touched={formik.touched.email}
          label="Email Address"
        />
        <Textinput
          value={formik.values.password}
          type="password"
          id="password"
          onChange={formik.handleChange}
          label="Password"
          errors={formik.errors.password}
          onBlur={formik.handleBlur}
          touched={formik.touched.password}
        />

        <Button name="login" type="submit" />
      </form>
    </div>
  );
};
export default Login;
