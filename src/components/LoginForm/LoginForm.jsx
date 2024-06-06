import { Field, Form, Formik, ErrorMessage } from "formik";
import { useState } from "react";
import sprite from "../../assets/sprite.svg";
import css from "./LoginForm.module.css";
import clsx from "clsx";
import Button from "../Button/Button";
import AuthNav from "../AuthNav/AuthNav";
import * as Yup from "yup";

export default function LoginForm() {
  const [isShown, setIsShown] = useState(false);

  const handlerSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const handleShowPassword = () => {
    setIsShown(!isShown);
  };

  const schema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={schema}
      onSubmit={handlerSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <AuthNav />

        <ul className={css.fieldsList}>
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
                placeholder="Confirm a password"
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
          text="Log In Now"
          isIcon={false}
          verticalPadding="14px"
        />
      </Form>
    </Formik>
  );
}
