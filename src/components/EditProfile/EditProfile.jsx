import { useState } from "react";
import sprite from "../../assets/sprite.svg";
import { ErrorMessage, Field, Form, Formik } from "formik";
import clsx from "clsx";
import * as Yup from "yup";
import css from "./EditProfile.module.css";
import Button from "../Button/Button";

export default function EditProfile() {
  const [showPassword, setShowPassword] = useState(false);
  const [userAvatar, setUserAvatar] = useState(
    "https://png.pngtree.com/png-clipart/20190614/original/pngtree-sunny-little-boy-children-cute-little-boy-avatar-brown-big-eyes-png-image_3793761.jpg"
  );

  const theme = "dark";

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Name is too short").required("Name is required"),
    email: Yup.string().email("Invalid format").required("Email is required"),
    password: Yup.string()
      .min(8, "Password is too short")
      .required("Password is required"),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const handleClose = () => {
    console.log("close");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        cropImage(reader.result, file);
      };
      reader.readAsDataURL(file);
    }
  };

  const cropImage = (src, originalFile) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const width = 68;
      const height = 68;

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      const croppedImageUrl = canvas.toDataURL(originalFile.type);
      setUserAvatar(croppedImageUrl);

      // canvas.toBlob((blob) => {
      //   const croppedFile = new File([blob], originalFile.name, {
      //     type: originalFile.type,
      //   });
      //   dispatch(uploadAvatar(croppedFile));
      // }, originalFile.type);
    };
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={clsx(css.EPContainer, css[theme])}>
      <button className={css.closeBtn} type="button" onClick={handleClose}>
        <svg
          className={clsx(css.closeIcon, css[theme])}
          width={"18"}
          height={"18"}
        >
          <use href={`${sprite}#icon-x-close`}></use>
        </svg>
      </button>
      <h2 className={css.title}>Edit profile</h2>
      <div className={css.profilePicture}>
        <input
          id="image-input"
          type="file"
          accept="image/*"
          className={css.input}
          onChange={handleImageChange}
        />
        <label htmlFor="image-input" className={css.inputLabel}>
          <img src={userAvatar} alt="Profile" className={css.profileImage} />
          <div className={clsx(css.uploadButton, css[theme])}>
            <svg className={clsx(css.icon, css[theme])}>
              <use href={`${sprite}#icon-plus`}></use>
            </svg>
          </div>
        </label>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <ul className={css.formList}>
              <li className={css.inputGroup}>
                <Field
                  type="text"
                  name="name"
                  className={clsx(css.inputField, css[theme])}
                  placeholder="Name"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className={clsx(css.error, css[theme])}
                />
              </li>
              <li className={css.inputGroup}>
                <Field
                  type="email"
                  name="email"
                  className={clsx(css.inputField, css[theme])}
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className={clsx(css.error, css[theme])}
                />
              </li>
              <li className={css.inputGroup}>
                <span>
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className={clsx(css.inputField, css[theme])}
                    placeholder="Password"
                  />
                  <svg
                    className={clsx(
                      css.iconEye,
                      css[theme],
                      showPassword && css.isShownIcon
                    )}
                    onClick={toggleShowPassword}
                  >
                    <use href={`${sprite}#icon-eye`}></use>
                  </svg>
                </span>
                <ErrorMessage
                  name="password"
                  component="p"
                  className={clsx(css.error, css[theme])}
                />
              </li>
            </ul>
            <div>
              <Button
                type="submit"
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
