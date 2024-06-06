import { Field, Form, Formik } from "formik";
import css from "./WelcomePage.module.css"
import clsx from "clsx";
import Button from "../../components/Button/Button";
import * as Yup from 'yup';
import sprite from "../../assets/sprite.svg"

const initialValues = {
  email: "",
  comment: "",
}

const HelpFormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  comment: Yup.string()
    .min(5, 'Comments must be at least 5 characters long')
    .max(50, 'Comments must be at most 50 characters long')
    .required('Comments are required')
});

export default function HelpForm () {
const theme = "light";

const handleSubmit = (values, actions) => {
  console.log(values);
  actions.resetForm();
};

const handleClose = () => {
  console.log("Modal closed");
};

return (
  <div className={css.container}>
  <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={HelpFormSchema}>
    <Form className={clsx(css.form, [theme])}>
    <button type="button" onClick={handleClose} className={css.closeBtn}>
            <svg className={css.closeIcon} width="18" height="18">
              <use href={`${sprite}#icon-x-close`}></use>
            </svg>
          </button>
    <h2 className={css.title}>Need help</h2>
      <Field type="email" name="email" placeholder="Email address" className={clsx(css.input, [theme])}/>
      <Field as="textarea" type="text" name="comment" placeholder="Comment" className={clsx(css.textarea, [theme])}/>
      <Button text="Send" isIcon={false} verticalPadding="14px"/>
    </Form>
  </Formik>
  </div>
)
}