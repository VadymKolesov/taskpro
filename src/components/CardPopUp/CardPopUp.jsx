import css from "./CardPopUp.module.css";
import clsx from "clsx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../Button/Button";
import sprite from "../../assets/sprite.svg";
import * as Yup from "yup";

export default function CardPopUp({ isEdit, titleValue, descriptionValue }) {
  const theme = "dark";

  const schema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string(),
    color: Yup.string().required("Color is required"),
  });

  const handleSubmit = (values, actions) => {
    if (isEdit === true) {
      if (
        titleValue === values.name &&
        descriptionValue === values.description
      ) {
        return console.log(
          "Just close pop up, no submit because nothing was edited"
        );
      } else {
        console.log(
          `Edit ${values.title}, ${values.description} and ${values.color}`
        );
      }
    } else {
      console.log(
        `Add ${values.title}, ${values.description} and ${values.color}`
      );
    }
    actions.resetForm();
  };

  const handleClose = () => {
    console.log("close");
  };

  const initialValues = isEdit
    ? { title: titleValue, description: descriptionValue, color: "" }
    : { title: "", description: "", color: "" };

  return (
    <div className={clsx(css.cont, css[theme])}>
      <button className={clsx(css.closeBtn, css[theme])} onClick={handleClose}>
        <svg className={clsx(css.closeIcon, css[theme])}>
          <use href={`${sprite}#icon-x-close`}></use>
        </svg>
      </button>
      <p className={clsx(css.title, css[theme])}>
        {isEdit ? "Edit card" : "Add card"}
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
        validateOnBlur={true}
        validateOnChange={true}
      >
        <Form className={css.form}>
          <div className={css.inputCont}>
            <Field
              type="text"
              name="title"
              className={clsx(css.input, css[theme])}
              placeholder="Title"
            />
            <ErrorMessage
              name="title"
              component="p"
              className={clsx(css.error, css[theme])}
            />
            <Field
              as="textarea"
              type="text"
              name="description"
              className={clsx(css.input, css[theme], css.descInput)}
              placeholder="Description"
            />
            <ErrorMessage
              name="description"
              component="p"
              className={clsx(css.error, css[theme])}
            />
          </div>
          <div className={css.inputCont}>
            <div className={css.customInputCont}>
              <label className={clsx(css.label, css[theme])}>Label color</label>
              <ul className={css.colorsList}>
                <li>
                  <Field
                    type="radio"
                    name="color"
                    className={clsx(css.radio, css.blueRadio)}
                    id="blue"
                    value="blue"
                  />
                  <label htmlFor="blue" className={clsx(css.radioLabel)}>
                    <svg className={clsx(css.radioIcon, css.blue)}>
                      <use href={`${sprite}#icon-circle`}></use>
                    </svg>
                    <svg className={clsx(css.radioIconChecked, css.blue)}>
                      <use href={`${sprite}#icon-circle-radio`}></use>
                    </svg>
                  </label>
                </li>
                <li>
                  <Field
                    type="radio"
                    name="color"
                    className={clsx(css.radio, css.pinkRadio)}
                    id="pink"
                    value="pink"
                  />
                  <label htmlFor="pink" className={clsx(css.radioLabel)}>
                    <svg className={clsx(css.radioIcon, css.pink)}>
                      <use href={`${sprite}#icon-circle`}></use>
                    </svg>
                    <svg className={clsx(css.radioIconChecked, css.pink)}>
                      <use href={`${sprite}#icon-circle-radio`}></use>
                    </svg>
                  </label>
                </li>
                <li>
                  <Field
                    type="radio"
                    name="color"
                    className={clsx(css.radio, css.greenRadio)}
                    id="green"
                    value="green"
                  />
                  <label htmlFor="green" className={clsx(css.radioLabel)}>
                    <svg className={clsx(css.radioIcon, css.green)}>
                      <use href={`${sprite}#icon-circle`}></use>
                    </svg>
                    <svg className={clsx(css.radioIconChecked, css.green)}>
                      <use href={`${sprite}#icon-circle-radio`}></use>
                    </svg>
                  </label>
                </li>
                <li>
                  <Field
                    type="radio"
                    name="color"
                    className={clsx(css.radio, css.grayRadio)}
                    id="gray"
                    value="gray"
                  />
                  <label htmlFor="gray" className={clsx(css.radioLabel)}>
                    <svg className={clsx(css.radioIcon, css.gray, css[theme])}>
                      <use href={`${sprite}#icon-circle`}></use>
                    </svg>
                    <svg
                      className={clsx(
                        css.radioIconChecked,
                        css.gray,
                        css[theme]
                      )}
                    >
                      <use href={`${sprite}#icon-circle-radio`}></use>
                    </svg>
                  </label>
                </li>
              </ul>
            </div>
            <ErrorMessage
              name="color"
              component="p"
              className={clsx(css.error, css[theme])}
            />
            <div className={css.customInputCont}>
              <label className={clsx(css.label, css[theme])}>Deadline</label>
            </div>
          </div>

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
