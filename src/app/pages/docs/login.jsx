import React from "react";
import { useFormik } from "formik";
import Textinput from "app/components/inputs/Textinput";
import { Button } from "app/components/buttons";
import * as Yup from "yup";
import Api from "app/config/api";
import { useMutation } from "react-query";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("This field is required.")
    .email("Please input a valid email"),
});

const Login = () => {
  const mutation = useMutation((values) =>
    Api.post("/dj-rest-auth/login/", values)
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      mutation.mutate(values);
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
        {mutation.isLoading && <p>Please Wait...</p>}
        {mutation.isError && <p>{mutation.error.message}</p>}
        <Button name="login" type="submit" />
      </form>
    </div>
  );
};
export default Login;
