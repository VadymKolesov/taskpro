import { useState } from "react";
import sprite from "../../assets/sprite.svg";
import css from "./EditProfile.module.css";
import ImageUploader from "./ImageUploader";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";

export default function EditProfile() {
  const [showPassword, setShowPassword] = useState(false);
  const {name, email, password} = useParams()

  const initialValues = {
    name: name,
    email: email,
    password: password,
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(2),
    email: Yup.string().email().required(),
    password: Yup.string().min(6),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className={css.EPContainer}>
      <button className={css.closeBtn} type="button">
        <svg className={css.icon} width={"18"} height={"18"}>
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
            <div>
              <Field type="text" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>Send</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
