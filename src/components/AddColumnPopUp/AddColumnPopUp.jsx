import css from "./AddColumnPopUp.module.css";
import clsx from "clsx";
import { Formik, Form, Field } from "formik";

export default function AddColumnPopUp({ titleValue, inputValue }) {
  const theme = "violet";
  const titleText = `${titleValue} column`;

  return (
    <div className={clsx(css.cont, css[theme])}>
      <button className={clsx(css.closeBtn, css[theme])}>-</button>
      <p className={clsx(css.text, css[theme])}>{titleText}</p>
      <Formik initialValues={{ name: `${inputValue}` }}>
        <Form className={css.form}>
          <Field
            type="text"
            name="title"
            className={clsx(css.input, css[theme])}
            placeholder="Title"
          />
          <button className={clsx(css.btn, css[theme])}>
            <div className={clsx(css.plusCont, css[theme])}>+</div>
            {titleValue}
          </button>
        </Form>
      </Formik>
    </div>
  );
}
