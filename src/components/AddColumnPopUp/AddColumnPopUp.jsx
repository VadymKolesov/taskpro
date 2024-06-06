import css from "./AddColumnPopUp.module.css";
import clsx from "clsx";
import { Formik, Form, Field } from "formik";
import Button from "../Button/Button";
import sprite from "../../assets/sprite.svg";

export default function AddColumnPopUp({ titleValue, inputValue }) {
  const theme = "violet";
  const titleText = `${titleValue} column`;

  return (
    <div className={clsx(css.cont, css[theme])}>
      <button className={clsx(css.closeBtn, css[theme])}>
        <svg className={clsx(css.closeIcon, css[theme])}>
          <use href={`${sprite}#icon-x-close`}></use>
        </svg>
      </button>
      <p className={clsx(css.text, css[theme])}>{titleText}</p>
      <Formik initialValues={{ name: `${inputValue}` }}>
        <Form className={css.form}>
          <Field
            type="text"
            name="title"
            className={clsx(css.input, css[theme])}
            placeholder="Title"
          />
          <Button text={titleValue} isIcon={true} verticalPadding="10px" />
        </Form>
      </Formik>
    </div>
  );
}
