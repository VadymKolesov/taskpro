import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./HelpForm.module.css";
import clsx from "clsx";
import { useId } from "react";
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
  const emailFieldId = useId();
  const commentFieldId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={HelpFormSchema}
    >
      <Form className={clsx(css.form, css[theme])}>
        <div>
          <Field
            type="email"
            name="email"
            id={emailFieldId}
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
            type="text"
            name="comment"
            id={commentFieldId}
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
