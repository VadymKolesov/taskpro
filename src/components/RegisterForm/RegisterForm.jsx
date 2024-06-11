import { Form, Field, Formik, ErrorMessage } from "formik";
import sprite from "../../assets/sprite.svg";
import css from "./RegisterForm.module.css";
import clsx from "clsx";
import AuthNav from "../AuthNav/AuthNav";
import Button from "../Button/Button";
import { useState } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { selectError } from "../../redux/auth/selectors";

export default function RegisterForm() {
  const dispatch = useDispatch();

  const error = useSelector(selectError);

  const [isShown, setIsShown] = useState(false);

  const handlerSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  const handleShowPassword = () => {
    setIsShown(!isShown);
  };

  const schema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Wrong email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password is too short")
      .max(64, "Password is too long"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={schema}
      onSubmit={handlerSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <AuthNav />
        {error && <p className={clsx(css.error, css.message)}>{error}</p>}
        <ul className={css.fieldsList}>
          <li>
            <Field
              className={css.input}
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <ErrorMessage name="name" component="p" className={css.error} />
          </li>
          <li>
            <Field
              className={css.input}
              type="text"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="p" className={css.error} />
          </li>
          <li>
            <span>
              <Field
                className={css.input}
                type={isShown ? "text" : "password"}
                name="password"
                placeholder="Create a password"
              />

              <svg
                className={clsx(css.iconEye, isShown && css.isShownIcon)}
                onClick={handleShowPassword}
              >
                <use href={`${sprite}#icon-eye`}></use>
              </svg>
            </span>
            <ErrorMessage name="password" component="p" className={css.error} />
          </li>
        </ul>

        <Button
          type="submit"
          text="Register Now"
          isIcon={false}
          verticalPadding="14px"
        />
      </Form>
    </Formik>
  );
}
