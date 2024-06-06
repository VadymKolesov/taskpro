import { useState } from "react";
import sprite from "../../assets/sprite.svg";
import css from "./EditProfile.module.css";
import ImageUploader from "./ImageUploader";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function EditProfile() {
  const [showPassword, setShowPassword] = useState(false);

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
    <div className={css.EPContainer}>
      <button className={css.closeBtn} type="button">
        <svg className={css.closeIcon} width={"18"} height={"18"}>
          <use href={`${sprite}#icon-x-close`}></use>
        </svg>
      </button>
      <h2 className={css.title}>Edit profile</h2>
      <ImageUploader setImageURL={``} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={css.profilePicture}>
              <img src="path_to_image" alt="Profile" />
              <button type="button" className={css.uploadButton}>+</button>
            </div>
            <div className={css.inputGroup}>
              <Field 
                type="text" 
                name="name" 
                className={css.inputField} 
              />
              <ErrorMessage name="name" component="div" className={css.errorMessage} />
            </div>
            <div className={css.inputGroup}>
              <Field 
                type="email" 
                name="email" 
                className={css.inputField} 
                disabled 
              />
              <ErrorMessage name="email" component="div" className={css.errorMessage} />
            </div>
            <div className="input-group password-group">
              <Field 
                type={showPassword ? "text" : "password"} 
                name="password" 
                className={css.inputField} 
              />
              <button type="button" onClick={toggleShowPassword} className={css.togglePasswordButton}>
                {showPassword ? 'Hide' : 'Show'}
              </button>
              <ErrorMessage name="password" component="div" className={css.errorMessage} />
            </div>
            <button type="submit" className={css.submitButton} disabled={isSubmitting}>Send</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
