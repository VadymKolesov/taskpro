import { useState } from "react";
import sprite from "../../assets/sprite.svg";
// import ImageUploader from "./ImageUploader";
import { ErrorMessage, Field, Form, Formik } from "formik";
import clsx from "clsx";
import * as Yup from "yup";
import css from "./EditProfile.module.css";
import Button from "../Button/Button";

export default function EditProfile() {
  const [showPassword, setShowPassword] = useState(false);
  const theme = "dark";

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Too short"),
    email: Yup.string().email("Invalid format").required(),
    password: Yup.string().min(6),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={clsx(css.EPContainer, css[theme])}>
      <button className={css.closeBtn} type="button">
        <svg className={css.closeIcon} width={"18"} height={"18"}>
          <use href={`${sprite}#icon-x-close`}></use>
        </svg>
      </button>
      <h2 className={css.title}>Edit profile</h2>
      {/* <ImageUploader setImageURL={``} /> */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <ul className={css.formList}>
              <li className={css.profilePicture}>
                <img src="path_to_image" alt="Profile" />
                <button type="button" className={css.uploadButton}>
                  +
                </button>
              </li>
              <li className={css.inputGroup}>
                <Field
                  type="text"
                  name="name"
                  className={css.inputField}
                  placeholder="Name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={css.errorMessage}
                />
              </li>
              <li className={css.inputGroup}>
                <Field
                  type="email"
                  name="email"
                  className={css.inputField}
                  placeholder="Email"
                  disabled
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.errorMessage}
                />
              </li>
              <li className={css.inputGroup}>
                <span>
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className={css.inputField}
                    placeholder="Password"
                  />
                  <svg
                    className={clsx(css.iconEye, showPassword && css.isShownIcon)}
                    onClick={toggleShowPassword}
                  >
                    <use href={`${sprite}#icon-eye`}></use>
                  </svg>
                </span>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={css.errorMessage}
                />
              </li>
            </ul>
            <div>
              <Button
                type="submit"
                className={clsx(css.submitButton, css[theme])}
                disabled={isSubmitting}
                isIcon={false}
                verticalPadding="14px"
                text={"Send"}
              ></Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

// зробити merge саме гілки main у мою гілку
