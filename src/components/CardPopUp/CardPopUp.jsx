import css from "./CardPopUp.module.css";
import clsx from "clsx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../Button/Button";
import sprite from "../../assets/sprite.svg";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";
import Calendar from "../Calendar/Calendar";
import { setIsAddCardOpen } from "../../redux/controls/slice";
import { useEffect, useState } from "react";
import { selectIsCardEdit } from "../../redux/controls/selectors";
import { addCard, updateCard } from "../../redux/board/operations";
import { selectCurrentColumn } from "../../redux/column/selectors";
import { selectCurrentCard } from "../../redux/card/selectors";
import { resetCurrentCard } from "../../redux/card/slice";

export default function CardPopUp() {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const [deadline, setDeadline] = useState(Date.now());
  const isEdit = useSelector(selectIsCardEdit);
  const column = useSelector(selectCurrentColumn);
  const card = useSelector(selectCurrentCard);

  useEffect(() => {
    isEdit && setDeadline(+card.deadline);
  }, [isEdit, card]);

  const schema = Yup.object({
    title: Yup.string()
      .required("Title is required")
      .max(50, "Title must contain less than 50 characters"),
    description: Yup.string()
      .required("Description is required")
      .max(300, "Description must contain less than 300 characters"),
    priority: Yup.string().required("Priority is required"),
  });

  const handleSubmit = (values, actions) => {
    const newCard = { ...values, deadline: deadline.toString() };
    if (!isEdit) {
      dispatch(addCard({ columnId: column._id, card: newCard }));
    } else {
      dispatch(updateCard({ cardId: card._id, card: newCard }));
      dispatch(resetCurrentCard());
    }
    dispatch(setIsAddCardOpen(false));
    actions.resetForm();
  };

  const handleClose = () => {
    dispatch(setIsAddCardOpen(false));
    dispatch(resetCurrentCard());
  };

  const initialValues = {
    title: !isEdit ? "" : card.title,
    description: !isEdit ? "" : card.description,
    priority: !isEdit ? "without" : card.priority,
  };

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
            <ErrorMessage name="title" component="p" className={css.error} />
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
              className={css.error}
            />
          </div>
          <div className={css.inputCont}>
            <div className={css.customInputCont}>
              <label className={clsx(css.label, css[theme])}>Label color</label>
              <ul className={css.colorsList}>
                <li>
                  <Field
                    type="radio"
                    name="priority"
                    className={clsx(css.radio, css.blueRadio)}
                    id="blue"
                    value="low"
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
                    name="priority"
                    className={clsx(css.radio, css.pinkRadio)}
                    id="pink"
                    value="medium"
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
                    name="priority"
                    className={clsx(css.radio, css.greenRadio)}
                    id="green"
                    value="high"
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
                    name="priority"
                    className={clsx(css.radio, css.grayRadio)}
                    id="gray"
                    value="without"
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
            <ErrorMessage name="color" component="p" className={css.error} />
            <div className={css.customInputCont}>
              <label className={clsx(css.label, css[theme])}>Deadline</label>
              <Calendar deadline={deadline} setDeadline={setDeadline} />
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
