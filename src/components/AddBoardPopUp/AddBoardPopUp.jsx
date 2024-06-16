// import React from "react";
import css from "./AddBoardPopUp.module.css";
import clsx from "clsx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../Button/Button";
import sprite from "../../assets/sprite.svg";
import * as Yup from "yup";
import { setBoardModalOpen } from "../../redux/controls/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";
import { selectIsBoardEdit } from "../../redux/controls/selectors";
import noBg from "../../assets/boards-bg/no-bg.svg";
import { create, update } from "../../redux/board/operations";
import { selectBoard } from "../../redux/board/selectors";
import { useNavigate } from "react-router-dom";
import { background } from "../Board/BoardBg/BoardBg";

export default function AddBoardPopUp() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const isEdit = useSelector(selectIsBoardEdit);
  const board = useSelector(selectBoard);
  const navigate = useNavigate();

  const schema = Yup.object({
    name: Yup.string()
      .required("Title is required")
      .max(18, "Title must contain less than 18 characters"),
    iconName: Yup.string().required("Icon is required"),
    backgroundName: Yup.string().required("Background is required"),
  });

  const handleSubmit = async (values, actions) => {
    if (isEdit) {
      dispatch(
        update({
          id: board._id,
          board: { ...values },
        })
      );
    } else {
      const action = await dispatch(create(values));

      if (create.fulfilled.match(action)) {
        const newBoardId = action.payload._id;
        navigate(`/home/${newBoardId}`);
      }
    }
    dispatch(setBoardModalOpen(false));
    actions.resetForm();
  };

  const handleClose = () => {
    dispatch(setBoardModalOpen(false));
  };

  const icons = [
    { id: 1, name: "icon-project-1" },
    { id: 2, name: "icon-project-2" },
    { id: 3, name: "icon-project-3" },
    { id: 4, name: "icon-project-4" },
    { id: 5, name: "icon-project-5" },
    { id: 6, name: "icon-project-6" },
    { id: 7, name: "icon-project-7" },
    { id: 8, name: "icon-project-8" },
  ];

  const backgrounds = [
    { id: "0", url: noBg },
    { id: "1", url: background["1"].mobile },
    { id: "2", url: background["2"].mobile },
    { id: "3", url: background["3"].mobile },
    { id: "4", url: background["4"].mobile },
    { id: "5", url: background["5"].mobile },
    { id: "6", url: background["6"].mobile },
    { id: "7", url: background["7"].mobile },
    { id: "8", url: background["8"].mobile },
    { id: "9", url: background["9"].mobile },
    { id: "10", url: background["10"].mobile },
    { id: "11", url: background["11"].mobile },
    { id: "12", url: background["12"].mobile },
    { id: "13", url: background["13"].mobile },
    { id: "14", url: background["14"].mobile },
    { id: "15", url: background["15"].mobile },
  ];

  const initialValues = {
    name: !isEdit ? "" : board.name,
    iconName: !isEdit ? "icon-project-1" : board.iconName,
    backgroundName: !isEdit ? "0" : board.backgroundName,
  };

  return (
    <div className={clsx(css.cont, css[theme])}>
      <button className={clsx(css.closeBtn, css[theme])} onClick={handleClose}>
        <svg className={clsx(css.closeIcon, css[theme])}>
          <use href={`${sprite}#icon-x-close`}></use>
        </svg>
      </button>
      <p className={clsx(css.text, css[theme])}>
        {isEdit ? "Edit board" : "New board"}
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
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
            <ul className={css.imgContainer}>
              <li>
                <p className={clsx(css.groupTitle, css[theme])}>Icons</p>
                <div className={css.iconsContainer}>
                  {icons.map((icon) => (
                    <label key={icon.id}>
                      <svg
                        className={clsx(
                          css.icon,
                          css[theme],
                          values.iconName === icon.name && css.selectedIcon
                        )}
                      >
                        <use href={`${sprite}#${icon.name}`}></use>
                      </svg>
                      <Field
                        name="iconName"
                        type="radio"
                        value={icon.name}
                        className={css.radio}
                        checked={values.iconName === icon.name}
                        onChange={() => setFieldValue("iconName", icon.name)}
                      />
                    </label>
                  ))}
                </div>
              </li>
              <li>
                <p className={clsx(css.groupTitle, css[theme])}>Background</p>
                <div className={css.backgroundsContainer}>
                  {backgrounds.map((background) => (
                    <label key={background.id}>
                      <img
                        src={background.url}
                        alt="Background thumbnail"
                        className={clsx(
                          css.background,
                          css[theme],
                          values.backgroundName === background.id &&
                            css.selectedBg
                        )}
                      />
                      <Field
                        name="backgroundName"
                        type="radio"
                        value={background.id}
                        className={css.radio}
                        checked={values.backgroundName === background.id}
                        onChange={() =>
                          setFieldValue("backgroundName", background.id)
                        }
                      />
                    </label>
                  ))}
                </div>
              </li>
            </ul>
            <Button
              text={isEdit ? "Edit" : "Create"}
              isIcon={true}
              verticalPadding="10px"
              type="submit"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
