import css from "./AddColumnPopUp.module.css";
import clsx from "clsx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../Button/Button";
import sprite from "../../assets/sprite.svg";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";
import { setIsAddColumnOpen } from "../../redux/controls/slice";
import { selectIsColumnEdit } from "../../redux/controls/selectors";
import { addColumn, updateColumn } from "../../redux/board/operations";
import { selectBoard } from "../../redux/board/selectors";
import { selectCurrentColumn } from "../../redux/column/selectors";
import { resetCurrentColumn } from "../../redux/column/slice";

export default function AddColumnPopUp() {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const isEdit = useSelector(selectIsColumnEdit);
  const board = useSelector(selectBoard);
  const column = useSelector(selectCurrentColumn);

  const schema = Yup.object({
    name: Yup.string()
      .required("Title is required")
  });

  const handleSubmit = (values, actions) => {
    if (!isEdit) {
      dispatch(addColumn({
        boardId: board._id,
        ...values
      }))
    } else {
      dispatch(updateColumn({
        columnId: column._id,
        ...values,
      }))
      dispatch(resetCurrentColumn());
    }
    dispatch(setIsAddColumnOpen(false));
    actions.resetForm();
  };

  const handleClose = () => {
    dispatch(setIsAddColumnOpen(false));
    dispatch(resetCurrentColumn());
  };

  return (
    <div className={clsx(css.cont, css[theme])}>
      <button className={clsx(css.closeBtn, css[theme])} onClick={handleClose}>
        <svg className={clsx(css.closeIcon, css[theme])}>
          <use href={`${sprite}#icon-x-close`}></use>
        </svg>
      </button>
      <p className={clsx(css.text, css[theme])}>
        {isEdit ? "Edit column" : "Add column"}
      </p>
      <Formik
        initialValues={{ name: !isEdit ? "" : column.name }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <Field
            type="text"
            name="name"
            className={clsx(css.input, css[theme])}
            placeholder="Title"
          />
          <ErrorMessage
            name="name"
            component="p"
            className={clsx(css.error, css[theme])}
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
