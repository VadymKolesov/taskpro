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

import bg1 from "../../assets/boards-bg/mobile/backgound-mobile-1.jpg";
import bg2 from "../../assets/boards-bg/mobile/backgound-mobile-2.jpg";
import bg3 from "../../assets/boards-bg/mobile/backgound-mobile-3.jpg";
import bg4 from "../../assets/boards-bg/mobile/backgound-mobile-4.jpg";
import bg5 from "../../assets/boards-bg/mobile/backgound-mobile-5.jpg";
import bg6 from "../../assets/boards-bg/mobile/backgound-mobile-6.jpg";
import bg7 from "../../assets/boards-bg/mobile/backgound-mobile-7.jpg";
import bg8 from "../../assets/boards-bg/mobile/backgound-mobile-8.jpg";
import bg9 from "../../assets/boards-bg/mobile/backgound-mobile-9.jpg";
import bg10 from "../../assets/boards-bg/mobile/backgound-mobile-10.jpg";
import bg11 from "../../assets/boards-bg/mobile/backgound-mobile-11.jpg";
import bg12 from "../../assets/boards-bg/mobile/backgound-mobile-12.jpg";
import bg13 from "../../assets/boards-bg/mobile/backgound-mobile-13.jpg";
import bg14 from "../../assets/boards-bg/mobile/backgound-mobile-14.jpg";
import bg15 from "../../assets/boards-bg/mobile/backgound-mobile-15.jpg";
import noBg from "../../assets/boards-bg/no-bg.svg";
import { create, update } from "../../redux/board/operations";
import { selectBoard } from "../../redux/board/selectors";
import { useNavigate } from "react-router-dom";

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
    { id: "1", url: bg1 },
    { id: "2", url: bg2 },
    { id: "3", url: bg3 },
    { id: "4", url: bg4 },
    { id: "5", url: bg5 },
    { id: "6", url: bg6 },
    { id: "7", url: bg7 },
    { id: "8", url: bg8 },
    { id: "9", url: bg9 },
    { id: "10", url: bg10 },
    { id: "11", url: bg11 },
    { id: "12", url: bg12 },
    { id: "13", url: bg13 },
    { id: "14", url: bg14 },
    { id: "15", url: bg15 },
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
