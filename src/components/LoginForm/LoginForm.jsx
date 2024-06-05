import { Field, Form, Formik } from "formik";
// import { useState } from "react";
import css from "./LoginForm.module.css";
// import { useDispatch } from "react-redux";
// import { logIn } from "../../redux/auth/operations";
import { PiEye, PiEyeClosed } from "react-icons/pi";

export default function LoginForm() {
  // const dispatch = useDispatch();
  // const [showPassword, setShowPassword] = useState(false);

  // const handlerSubmit = (values, actions) => {
  //   dispatch(logIn(values));
  //   actions.resetForm();
  // };

  // const togglePasswordVisibility = () => {
  //   setShowPassword((prevShowPassword) => !prevShowPassword);
  // };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handlerSubmit}
    >
      <Form className={css.form} autoComplete="off">
        {/* доцільно використати AuthNav */}
        <div className={css.form_header}>
          <a href="" className={`${css.form_reg} ${css.form_link}`}>
            Registration
          </a>
          <a href="" className={`${css.form_login} ${css.form_link}`}>
            Log In
          </a>
        </div>
        {/* --============----- */}

        <Field
          className={css.input}
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <div className={css.passwordContainer}>
          <Field
            className={css.input}
            type="password"
            name="password"
            placeholder="Create a password"
          />
          <button
            className={css.togglePasswordButton}
            type="button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <PiEyeClosed /> : <PiEye />}
          </button>
        </div>
        <button className={css.btn} type="submit">
          Log In Now
        </button>
      </Form>
    </Formik>
  );
}
