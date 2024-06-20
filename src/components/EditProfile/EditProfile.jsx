import { useState } from "react";
import sprite from "../../assets/sprite.svg";
import { ErrorMessage, Field, Form, Formik } from "formik";
import clsx from "clsx";
import * as Yup from "yup";
import css from "./EditProfile.module.css";
import Button from "../Button/Button";
import {
  selectTheme,
  selectUser,
  selectError,
  selectIsLoading,
} from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setProfileModalOpen } from "../../redux/controls/slice";
import { updateUser, updateAvatar } from "../../redux/auth/operations";
import { motion, AnimatePresence } from "framer-motion";

export default function EditProfile() {
  const user = useSelector(selectUser);
  const theme = useSelector(selectTheme);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const [showPassword, setShowPassword] = useState(false);
  const [isSamevalues, setIsSameValues] = useState(false);
  const [userAvatar, setUserAvatar] = useState(user.avatarUrl);

  const dispatch = useDispatch();

  const initialValues = {
    name: user.name || "",
    email: user.email || "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Name is too short").required("Name is required"),
    email: Yup.string().email("Invalid format").required("Email is required"),
    password: Yup.string().min(8, "Password is too short"),
  });

  const handleSubmit = (values, actions) => {
    setIsSameValues(false);

    const updatedValues = {};

    for (let key in values) {
      if (values[key] !== initialValues[key]) {
        updatedValues[key] = values[key];
      }
    }

    if (Object.keys(updatedValues).length === 0) {
      setIsSameValues(true);
      return;
    }

    dispatch(updateUser(updatedValues));
    actions.resetForm();
  };

  const handleClose = () => {
    dispatch(setProfileModalOpen(false));
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

      const MAX_FILE_SIZE_MB = 1;

      let maxWidth = img.width;
      let maxHeight = img.height;

      if (originalFile.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        const scaleFactor = Math.min(
          (MAX_FILE_SIZE_MB * 1024 * 1024) / originalFile.size,
          1
        );
        maxWidth *= scaleFactor;
        maxHeight *= scaleFactor;
      }

      canvas.width = maxWidth;
      canvas.height = maxHeight;

      ctx.drawImage(img, 0, 0, maxWidth, maxHeight);

      canvas.toBlob((blob) => {
        const croppedFile = new File([blob], originalFile.name, {
          type: originalFile.type,
        });

        const croppedImageUrl = canvas.toDataURL(originalFile.type);

        setUserAvatar(croppedImageUrl);

        const formData = new FormData();
        formData.append("avatar", croppedFile);

        dispatch(updateAvatar(formData));
      }, originalFile.type);
    };
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={clsx(css.EPContainer, css[theme])}>
      {!isLoading ? (
        <>
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
              <img
                src={userAvatar}
                alt="Profile"
                className={css.profileImage}
              />

              <div className={clsx(css.uploadButton, css[theme])}>
                <svg className={clsx(css.icon, css[theme])}>
                  <use href={`${sprite}#icon-plus`}></use>
                </svg>
              </div>
            </label>
          </div>
          {error && (
            <p className={css.error} style={{ paddingBottom: "14px" }}>
              {error}
            </p>
          )}
          {isSamevalues && (
            <p className={css.error} style={{ paddingBottom: "14px" }}>
              To change the information, enter a new value
            </p>
          )}
          <Formik
            enableReinitialize
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
                      className={css.error}
                    />
                  </li>
                  <li className={css.inputGroup}>
                    <Field
                      type="text"
                      name="email"
                      className={clsx(css.inputField, css[theme])}
                      placeholder="Email"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className={css.error}
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
                      className={css.error}
                    />
                  </li>
                </ul>
                <div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    isIcon={false}
                    verticalPadding="14px"
                    text={isLoading ? "Please wait..." : "Send"}
                  ></Button>
                </div>
              </Form>
            )}
          </Formik>
        </>
      ) : (
        <AnimatePresence>
          <motion.div
            animate={{ opacity: [0, 1] }}
            exit={{ opacity: [1, 0] }}
            transition={{ duration: 0.5 }}
          >
            <div className={clsx(css.loader, css[theme])}></div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
