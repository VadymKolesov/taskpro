import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./HelpForm.module.css";
import clsx from "clsx";
import * as Yup from "yup";
import Button from "../Button/Button";
import sprite from "../../assets/sprite.svg";
import { getThemeStyle } from "../../scripts/getThemeStyle";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";

const HelpFormSchema = Yup.object({
  email: Yup.string()
    .email("Please, enter a valid email")
    .required("Email is required"),
  comment: Yup.string()
    .min(15, "Message is too short")
    .max(200, "Message is too long")
    .required("Comment is required"),
});

export default function HelpForm() {
  const userTheme = useSelector(selectTheme);
  const theme = getThemeStyle(css, userTheme);

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const handleClose = () => {
    console.log("close");
  };

  return (
    <Formik
      initialValues={{
        email: "",
        comment: "",
      }}
      validationSchema={HelpFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={clsx(css.form, theme)}>
        <svg className={clsx(css.closeIcon, theme)} onClick={handleClose}>
          <use href={`${sprite}#icon-x-close`}></use>
        </svg>
        <h2 className={clsx(css.title, theme)}>Need help</h2>

        <ul className={css.fieldsList}>
          <li>
            <Field
              type="text"
              name="email"
              className={clsx(css.input, theme)}
              placeholder="Email address"
            />
            <ErrorMessage
              name="email"
              component="p"
              className={clsx(css.error, theme)}
            />
          </li>
          <li>
            <Field
              as="textarea"
              name="comment"
              className={clsx(css.textarea, theme)}
              placeholder="Comment"
            />
            <ErrorMessage
              name="comment"
              component="p"
              className={clsx(css.error, theme)}
            />
          </li>
        </ul>

        <Button
          type="submit"
          text="Send"
          isIcon={false}
          verticalPadding="14px"
        />
      </Form>
    </Formik>
  );
}
