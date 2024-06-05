// import { useState } from "react";
import { Form, Field, Formik } from "formik";
import css from "./RegisterForm.module.css";
// import { useDispatch } from "react-redux";
// import { register } from "../../redux/auth/operations";
// import { PiEye, PiEyeClosed } from "react-icons/pi";

export default function RegistrationForm() {
  // const dispatch = useDispatch();
  // const [showPassword, setShowPassword] = useState(false);

  // const handlerSubmit = (values, actions) => {
  //   dispatch(register(values));
  //   actions.resetForm();
  // };

  // const togglePasswordVisibility = () => {
  //   setShowPassword((prevShowPassword) => !prevShowPassword);
  // };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      // onSubmit={handlerSubmit}
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
          type="text"
          name="name"
          placeholder="Enter your name"
        />
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
            // onClick={togglePasswordVisibility}
          >
            {/* {showPassword ? <PiEyeClosed /> : <PiEye />} */}
          </button>
        </div>
        <button className={css.btn} type="submit">
          Register Now
        </button>
      </Form>
    </Formik>
  );
}
