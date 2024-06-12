import css from "./AddColumnPopUp.module.css";
import clsx from "clsx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../Button/Button";
import sprite from "../../assets/sprite.svg";
import * as Yup from "yup";
import { getThemeStyle } from "../../scripts/getThemeStyle";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";

export default function AddColumnPopUp({ isEdit, inputValue }) {
  const userTheme = useSelector(selectTheme);
  const theme = getThemeStyle(css, userTheme);

  const schema = Yup.object({
    name: Yup.string()
      .required("Title is required")
      .not([inputValue], "This title already use"),
  });

  const handleSubmit = (values, actions) => {
    isEdit
      ? console.log(`Edit ${values.name}`)
      : console.log(`Add ${values.name}`);
    actions.resetForm();
  };

  const handleClose = () => {
    console.log("close");
  };

  return (
    <div className={clsx(css.cont, theme)}>
      <button className={clsx(css.closeBtn, theme)} onClick={handleClose}>
        <svg className={clsx(css.closeIcon, theme)}>
          <use href={`${sprite}#icon-x-close`}></use>
        </svg>
      </button>
      <p className={clsx(css.text, theme)}>
        {isEdit ? "Edit column" : "Add column"}
      </p>
      <Formik
        initialValues={{ name: inputValue }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <Field
            type="text"
            name="name"
            className={clsx(css.input, theme)}
            placeholder="Title"
          />
          <ErrorMessage
            name="name"
            component="p"
            className={clsx(css.error, theme)}
          />
          <Button
            text={isEdit ? "Edit" : "Add"}
            isIcon={true}
            verticalPadding="10px"
            type="submit"
          />
        </Form>
      </Formik>
    </div>
  );
}
