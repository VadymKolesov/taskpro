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
import noBgDark from "../../assets/boards-bg/no-bg-dark.svg";
import noBgLight from "../../assets/boards-bg/no-bg-light.svg";
import noBgViolet from "../../assets/boards-bg/no-bg-violet.svg";
import { create, update } from "../../redux/board/operations";
import { selectBoard } from "../../redux/board/selectors";
import { useNavigate } from "react-router-dom";
import { background } from "../Board/BoardBg/BoardBg";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function AddBoardPopUp() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const isEdit = useSelector(selectIsBoardEdit);
  const board = useSelector(selectBoard);
  const navigate = useNavigate();

  const [pixelRatio, setPixelRatio] = useState("1x");

  useEffect(() => {
    const ratio = window.devicePixelRatio;
    if (ratio >= 4) {
      setPixelRatio("4x");
    } else if (ratio >= 2) {
      setPixelRatio("2x");
    } else {
      setPixelRatio("1x");
    }
  }, []);

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
    {
      id: "0",
      url:
        theme === "dark"
          ? noBgDark
          : theme === "light"
          ? noBgLight
          : noBgViolet,
    },
    { id: "1", url: background["1"].mobile[pixelRatio] },
    { id: "2", url: background["2"].mobile[pixelRatio] },
    { id: "3", url: background["3"].mobile[pixelRatio] },
    { id: "4", url: background["4"].mobile[pixelRatio] },
    { id: "5", url: background["5"].mobile[pixelRatio] },
    { id: "6", url: background["6"].mobile[pixelRatio] },
    { id: "7", url: background["7"].mobile[pixelRatio] },
    { id: "8", url: background["8"].mobile[pixelRatio] },
    { id: "9", url: background["9"].mobile[pixelRatio] },
    { id: "10", url: background["10"].mobile[pixelRatio] },
    { id: "11", url: background["11"].mobile[pixelRatio] },
    { id: "12", url: background["12"].mobile[pixelRatio] },
    { id: "13", url: background["13"].mobile[pixelRatio] },
    { id: "14", url: background["14"].mobile[pixelRatio] },
    { id: "15", url: background["15"].mobile[pixelRatio] },
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
                <div className={css.bgsContainer}>
                  {backgrounds.map((bg) => (
                    <label key={bg.id}>
                      <LazyLoadImage
                        effect="blur"
                        src={bg.url}
                        alt={`background-${bg.id}`}
                        className={clsx(
                          css.bg,
                          values.backgroundName === bg.id && css.selectedBg
                        )}
                        onClick={() => setFieldValue("backgroundName", bg.id)}
                      />
                      <Field
                        name="backgroundName"
                        type="radio"
                        value={bg.id}
                        className={css.radio}
                        checked={values.backgroundName === bg.id}
                        onChange={() => setFieldValue("backgroundName", bg.id)}
                      />
                    </label>
                  ))}
                </div>
              </li>
            </ul>
            <div className={css.btnContainer}>
              <Button
                type="submit"
                className={clsx(css.btn, css[theme])}
                text={isEdit ? "Save Changes" : "Create"}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
