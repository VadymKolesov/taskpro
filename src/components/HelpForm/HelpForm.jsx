import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./HelpForm.module.css";
import clsx from "clsx";
import * as Yup from "yup";

const initialValues = {
  name: "",
  comment: "",
};

const HelpFormSchema = Yup.object().shape({
  email: Yup.string().email("Please, enter a valid email").required("Required"),
  comment: Yup.string()
    .min(5, "Too short")
    .max(50, "Too long")
    .required("Required"),
});

export default function HelpForm() {
  const theme = "dark";

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={HelpFormSchema}
    >
      <h2 className={css.title}>Need help</h2>
      <Form className={clsx(css.form, css[theme])}>
        <div>
          <Field
            type="email"
            name="email"
            className={clsx(css.input, css[theme])}
            placeholder="Email address"
          />
          <ErrorMessage
            name="email"
            as="span"
            className={clsx(css.error, css[theme])}
          />
        </div>
        <div>
          <Field
            as="textarea"
            cols="20"
            rows="5"
            type="text"
            name="comment"
            className={clsx(css.input, css[theme])}
            placeholder="Comment"
          />
          <ErrorMessage
            name="comment"
            as="span"
            className={clsx(css.error, css[theme])}
          />
        </div>
        <button type="submit" className={clsx(css.btn, css[theme])}>
          Send
        </button>
      </Form>
    </Formik>
  );
}
